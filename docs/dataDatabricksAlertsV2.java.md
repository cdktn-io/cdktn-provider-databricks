# `dataDatabricksAlertsV2` Submodule <a name="`dataDatabricksAlertsV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksAlertsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAlertsV2 <a name="DataDatabricksAlertsV2" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2 databricks_alerts_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2;

DataDatabricksAlertsV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksAlertsV2ProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#page_size DataDatabricksAlertsV2#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig">DataDatabricksAlertsV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#provider_config DataDatabricksAlertsV2#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.pageSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#page_size DataDatabricksAlertsV2#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig">DataDatabricksAlertsV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#provider_config DataDatabricksAlertsV2#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksAlertsV2ProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig">DataDatabricksAlertsV2ProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetPageSize"></a>

```java
public void resetPageSize()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAlertsV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2;

DataDatabricksAlertsV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2;

DataDatabricksAlertsV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2;

DataDatabricksAlertsV2.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2;

DataDatabricksAlertsV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksAlertsV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksAlertsV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksAlertsV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksAlertsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAlertsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.alerts">alerts</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList">DataDatabricksAlertsV2AlertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference">DataDatabricksAlertsV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.pageSizeInput">pageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig">DataDatabricksAlertsV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `alerts`<sup>Required</sup> <a name="alerts" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.alerts"></a>

```java
public DataDatabricksAlertsV2AlertsList getAlerts();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList">DataDatabricksAlertsV2AlertsList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.providerConfig"></a>

```java
public DataDatabricksAlertsV2ProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference">DataDatabricksAlertsV2ProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.pageSizeInput"></a>

```java
public java.lang.Number getPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksAlertsV2ProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig">DataDatabricksAlertsV2ProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAlertsV2Alerts <a name="DataDatabricksAlertsV2Alerts" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2Alerts;

DataDatabricksAlertsV2Alerts.builder()
    .id(java.lang.String)
//  .providerConfig(DataDatabricksAlertsV2AlertsProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#id DataDatabricksAlertsV2#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig">DataDatabricksAlertsV2AlertsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#provider_config DataDatabricksAlertsV2#provider_config}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#id DataDatabricksAlertsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.providerConfig"></a>

```java
public DataDatabricksAlertsV2AlertsProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig">DataDatabricksAlertsV2AlertsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#provider_config DataDatabricksAlertsV2#provider_config}.

---

### DataDatabricksAlertsV2AlertsEffectiveRunAs <a name="DataDatabricksAlertsV2AlertsEffectiveRunAs" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsEffectiveRunAs;

DataDatabricksAlertsV2AlertsEffectiveRunAs.builder()
//  .servicePrincipalName(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.servicePrincipalName">servicePrincipalName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}. |

---

##### `servicePrincipalName`<sup>Optional</sup> <a name="servicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.servicePrincipalName"></a>

```java
public java.lang.String getServicePrincipalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}.

---

### DataDatabricksAlertsV2AlertsEvaluation <a name="DataDatabricksAlertsV2AlertsEvaluation" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsEvaluation;

DataDatabricksAlertsV2AlertsEvaluation.builder()
    .comparisonOperator(java.lang.String)
    .source(DataDatabricksAlertsV2AlertsEvaluationSource)
//  .emptyResultState(java.lang.String)
//  .notification(DataDatabricksAlertsV2AlertsEvaluationNotification)
//  .threshold(DataDatabricksAlertsV2AlertsEvaluationThreshold)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#comparison_operator DataDatabricksAlertsV2#comparison_operator}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.source">source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#source DataDatabricksAlertsV2#source}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.emptyResultState">emptyResultState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#empty_result_state DataDatabricksAlertsV2#empty_result_state}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.notification">notification</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#notification DataDatabricksAlertsV2#notification}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.threshold">threshold</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#threshold DataDatabricksAlertsV2#threshold}. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#comparison_operator DataDatabricksAlertsV2#comparison_operator}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.source"></a>

```java
public DataDatabricksAlertsV2AlertsEvaluationSource getSource();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#source DataDatabricksAlertsV2#source}.

---

##### `emptyResultState`<sup>Optional</sup> <a name="emptyResultState" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.emptyResultState"></a>

```java
public java.lang.String getEmptyResultState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#empty_result_state DataDatabricksAlertsV2#empty_result_state}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.notification"></a>

```java
public DataDatabricksAlertsV2AlertsEvaluationNotification getNotification();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#notification DataDatabricksAlertsV2#notification}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.threshold"></a>

```java
public DataDatabricksAlertsV2AlertsEvaluationThreshold getThreshold();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#threshold DataDatabricksAlertsV2#threshold}.

---

### DataDatabricksAlertsV2AlertsEvaluationNotification <a name="DataDatabricksAlertsV2AlertsEvaluationNotification" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsEvaluationNotification;

DataDatabricksAlertsV2AlertsEvaluationNotification.builder()
//  .notifyOnOk(java.lang.Boolean|IResolvable)
//  .retriggerSeconds(java.lang.Number)
//  .subscriptions(IResolvable|java.util.List<DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.notifyOnOk">notifyOnOk</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#notify_on_ok DataDatabricksAlertsV2#notify_on_ok}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.retriggerSeconds">retriggerSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#retrigger_seconds DataDatabricksAlertsV2#retrigger_seconds}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.subscriptions">subscriptions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#subscriptions DataDatabricksAlertsV2#subscriptions}. |

---

##### `notifyOnOk`<sup>Optional</sup> <a name="notifyOnOk" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.notifyOnOk"></a>

```java
public java.lang.Boolean|IResolvable getNotifyOnOk();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#notify_on_ok DataDatabricksAlertsV2#notify_on_ok}.

---

##### `retriggerSeconds`<sup>Optional</sup> <a name="retriggerSeconds" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.retriggerSeconds"></a>

```java
public java.lang.Number getRetriggerSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#retrigger_seconds DataDatabricksAlertsV2#retrigger_seconds}.

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.subscriptions"></a>

```java
public IResolvable|java.util.List<DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions> getSubscriptions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#subscriptions DataDatabricksAlertsV2#subscriptions}.

---

### DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions;

DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.builder()
//  .destinationId(java.lang.String)
//  .userEmail(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.destinationId">destinationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#destination_id DataDatabricksAlertsV2#destination_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.userEmail">userEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#user_email DataDatabricksAlertsV2#user_email}. |

---

##### `destinationId`<sup>Optional</sup> <a name="destinationId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.destinationId"></a>

```java
public java.lang.String getDestinationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#destination_id DataDatabricksAlertsV2#destination_id}.

---

##### `userEmail`<sup>Optional</sup> <a name="userEmail" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.userEmail"></a>

```java
public java.lang.String getUserEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#user_email DataDatabricksAlertsV2#user_email}.

---

### DataDatabricksAlertsV2AlertsEvaluationSource <a name="DataDatabricksAlertsV2AlertsEvaluationSource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsEvaluationSource;

DataDatabricksAlertsV2AlertsEvaluationSource.builder()
    .name(java.lang.String)
//  .aggregation(java.lang.String)
//  .display(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.display">display</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

### DataDatabricksAlertsV2AlertsEvaluationThreshold <a name="DataDatabricksAlertsV2AlertsEvaluationThreshold" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsEvaluationThreshold;

DataDatabricksAlertsV2AlertsEvaluationThreshold.builder()
//  .column(DataDatabricksAlertsV2AlertsEvaluationThresholdColumn)
//  .value(DataDatabricksAlertsV2AlertsEvaluationThresholdValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.column">column</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#column DataDatabricksAlertsV2#column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.value">value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}. |

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.column"></a>

```java
public DataDatabricksAlertsV2AlertsEvaluationThresholdColumn getColumn();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#column DataDatabricksAlertsV2#column}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.value"></a>

```java
public DataDatabricksAlertsV2AlertsEvaluationThresholdValue getValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}.

---

### DataDatabricksAlertsV2AlertsEvaluationThresholdColumn <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdColumn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn;

DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.builder()
    .name(java.lang.String)
//  .aggregation(java.lang.String)
//  .display(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.display">display</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

### DataDatabricksAlertsV2AlertsEvaluationThresholdValue <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue;

DataDatabricksAlertsV2AlertsEvaluationThresholdValue.builder()
//  .boolValue(java.lang.Boolean|IResolvable)
//  .doubleValue(java.lang.Number)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#bool_value DataDatabricksAlertsV2#bool_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#double_value DataDatabricksAlertsV2#double_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#string_value DataDatabricksAlertsV2#string_value}. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#bool_value DataDatabricksAlertsV2#bool_value}.

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#double_value DataDatabricksAlertsV2#double_value}.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#string_value DataDatabricksAlertsV2#string_value}.

---

### DataDatabricksAlertsV2AlertsParameters <a name="DataDatabricksAlertsV2AlertsParameters" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsParameters;

DataDatabricksAlertsV2AlertsParameters.builder()
    .name(java.lang.String)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#type DataDatabricksAlertsV2#type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#type DataDatabricksAlertsV2#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}.

---

### DataDatabricksAlertsV2AlertsProviderConfig <a name="DataDatabricksAlertsV2AlertsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsProviderConfig;

DataDatabricksAlertsV2AlertsProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#workspace_id DataDatabricksAlertsV2#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#workspace_id DataDatabricksAlertsV2#workspace_id}.

---

### DataDatabricksAlertsV2AlertsRunAs <a name="DataDatabricksAlertsV2AlertsRunAs" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsRunAs;

DataDatabricksAlertsV2AlertsRunAs.builder()
//  .servicePrincipalName(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.servicePrincipalName">servicePrincipalName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}. |

---

##### `servicePrincipalName`<sup>Optional</sup> <a name="servicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.servicePrincipalName"></a>

```java
public java.lang.String getServicePrincipalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}.

---

### DataDatabricksAlertsV2AlertsSchedule <a name="DataDatabricksAlertsV2AlertsSchedule" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsSchedule;

DataDatabricksAlertsV2AlertsSchedule.builder()
    .quartzCronSchedule(java.lang.String)
    .timezoneId(java.lang.String)
//  .pauseStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.quartzCronSchedule">quartzCronSchedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#quartz_cron_schedule DataDatabricksAlertsV2#quartz_cron_schedule}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#timezone_id DataDatabricksAlertsV2#timezone_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.pauseStatus">pauseStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#pause_status DataDatabricksAlertsV2#pause_status}. |

---

##### `quartzCronSchedule`<sup>Required</sup> <a name="quartzCronSchedule" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.quartzCronSchedule"></a>

```java
public java.lang.String getQuartzCronSchedule();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#quartz_cron_schedule DataDatabricksAlertsV2#quartz_cron_schedule}.

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#timezone_id DataDatabricksAlertsV2#timezone_id}.

---

##### `pauseStatus`<sup>Optional</sup> <a name="pauseStatus" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.pauseStatus"></a>

```java
public java.lang.String getPauseStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#pause_status DataDatabricksAlertsV2#pause_status}.

---

### DataDatabricksAlertsV2Config <a name="DataDatabricksAlertsV2Config" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2Config;

DataDatabricksAlertsV2Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksAlertsV2ProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#page_size DataDatabricksAlertsV2#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig">DataDatabricksAlertsV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#provider_config DataDatabricksAlertsV2#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#page_size DataDatabricksAlertsV2#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.providerConfig"></a>

```java
public DataDatabricksAlertsV2ProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig">DataDatabricksAlertsV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#provider_config DataDatabricksAlertsV2#provider_config}.

---

### DataDatabricksAlertsV2ProviderConfig <a name="DataDatabricksAlertsV2ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2ProviderConfig;

DataDatabricksAlertsV2ProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#workspace_id DataDatabricksAlertsV2#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#workspace_id DataDatabricksAlertsV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference <a name="DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference;

new DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetServicePrincipalName">resetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServicePrincipalName` <a name="resetServicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetServicePrincipalName"></a>

```java
public void resetServicePrincipalName()
```

##### `resetUserName` <a name="resetUserName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetUserName"></a>

```java
public void resetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalNameInput">servicePrincipalNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalName">servicePrincipalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs">DataDatabricksAlertsV2AlertsEffectiveRunAs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `servicePrincipalNameInput`<sup>Optional</sup> <a name="servicePrincipalNameInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalNameInput"></a>

```java
public java.lang.String getServicePrincipalNameInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalName`<sup>Required</sup> <a name="servicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalName"></a>

```java
public java.lang.String getServicePrincipalName();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.internalValue"></a>

```java
public DataDatabricksAlertsV2AlertsEffectiveRunAs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs">DataDatabricksAlertsV2AlertsEffectiveRunAs</a>

---


### DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference;

new DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.putSubscriptions">putSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetNotifyOnOk">resetNotifyOnOk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetRetriggerSeconds">resetRetriggerSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetSubscriptions">resetSubscriptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubscriptions` <a name="putSubscriptions" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.putSubscriptions"></a>

```java
public void putSubscriptions(IResolvable|java.util.List<DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.putSubscriptions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>>

---

##### `resetNotifyOnOk` <a name="resetNotifyOnOk" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetNotifyOnOk"></a>

```java
public void resetNotifyOnOk()
```

##### `resetRetriggerSeconds` <a name="resetRetriggerSeconds" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetRetriggerSeconds"></a>

```java
public void resetRetriggerSeconds()
```

##### `resetSubscriptions` <a name="resetSubscriptions" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetSubscriptions"></a>

```java
public void resetSubscriptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.effectiveNotifyOnOk">effectiveNotifyOnOk</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.effectiveRetriggerSeconds">effectiveRetriggerSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptions">subscriptions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOkInput">notifyOnOkInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSecondsInput">retriggerSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptionsInput">subscriptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOk">notifyOnOk</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSeconds">retriggerSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveNotifyOnOk`<sup>Required</sup> <a name="effectiveNotifyOnOk" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.effectiveNotifyOnOk"></a>

```java
public IResolvable getEffectiveNotifyOnOk();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `effectiveRetriggerSeconds`<sup>Required</sup> <a name="effectiveRetriggerSeconds" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.effectiveRetriggerSeconds"></a>

```java
public java.lang.Number getEffectiveRetriggerSeconds();
```

- *Type:* java.lang.Number

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptions"></a>

```java
public DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList getSubscriptions();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList</a>

---

##### `notifyOnOkInput`<sup>Optional</sup> <a name="notifyOnOkInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOkInput"></a>

```java
public java.lang.Boolean|IResolvable getNotifyOnOkInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retriggerSecondsInput`<sup>Optional</sup> <a name="retriggerSecondsInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSecondsInput"></a>

```java
public java.lang.Number getRetriggerSecondsInput();
```

- *Type:* java.lang.Number

---

##### `subscriptionsInput`<sup>Optional</sup> <a name="subscriptionsInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptionsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions> getSubscriptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>>

---

##### `notifyOnOk`<sup>Required</sup> <a name="notifyOnOk" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOk"></a>

```java
public java.lang.Boolean|IResolvable getNotifyOnOk();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retriggerSeconds`<sup>Required</sup> <a name="retriggerSeconds" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSeconds"></a>

```java
public java.lang.Number getRetriggerSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationNotification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>

---


### DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList;

new DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.get"></a>

```java
public DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>>

---


### DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference;

new DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetDestinationId">resetDestinationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetUserEmail">resetUserEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationId` <a name="resetDestinationId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetDestinationId"></a>

```java
public void resetDestinationId()
```

##### `resetUserEmail` <a name="resetUserEmail" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetUserEmail"></a>

```java
public void resetUserEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput">destinationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmailInput">userEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationId">destinationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmail">userEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationIdInput`<sup>Optional</sup> <a name="destinationIdInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput"></a>

```java
public java.lang.String getDestinationIdInput();
```

- *Type:* java.lang.String

---

##### `userEmailInput`<sup>Optional</sup> <a name="userEmailInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmailInput"></a>

```java
public java.lang.String getUserEmailInput();
```

- *Type:* java.lang.String

---

##### `destinationId`<sup>Required</sup> <a name="destinationId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationId"></a>

```java
public java.lang.String getDestinationId();
```

- *Type:* java.lang.String

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmail"></a>

```java
public java.lang.String getUserEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>

---


### DataDatabricksAlertsV2AlertsEvaluationOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsEvaluationOutputReference;

new DataDatabricksAlertsV2AlertsEvaluationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putNotification">putNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putThreshold">putThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetEmptyResultState">resetEmptyResultState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetNotification">resetNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotification` <a name="putNotification" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putNotification"></a>

```java
public void putNotification(DataDatabricksAlertsV2AlertsEvaluationNotification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putNotification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putSource"></a>

```java
public void putSource(DataDatabricksAlertsV2AlertsEvaluationSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>

---

##### `putThreshold` <a name="putThreshold" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putThreshold"></a>

```java
public void putThreshold(DataDatabricksAlertsV2AlertsEvaluationThreshold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>

---

##### `resetEmptyResultState` <a name="resetEmptyResultState" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetEmptyResultState"></a>

```java
public void resetEmptyResultState()
```

##### `resetNotification` <a name="resetNotification" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetNotification"></a>

```java
public void resetNotification()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.lastEvaluatedAt">lastEvaluatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notification">notification</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference">DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference">DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.threshold">threshold</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultStateInput">emptyResultStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notificationInput">notificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultState">emptyResultState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation">DataDatabricksAlertsV2AlertsEvaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastEvaluatedAt`<sup>Required</sup> <a name="lastEvaluatedAt" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.lastEvaluatedAt"></a>

```java
public java.lang.String getLastEvaluatedAt();
```

- *Type:* java.lang.String

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notification"></a>

```java
public DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference getNotification();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference">DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.source"></a>

```java
public DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference">DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.threshold"></a>

```java
public DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference getThreshold();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference</a>

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `emptyResultStateInput`<sup>Optional</sup> <a name="emptyResultStateInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultStateInput"></a>

```java
public java.lang.String getEmptyResultStateInput();
```

- *Type:* java.lang.String

---

##### `notificationInput`<sup>Optional</sup> <a name="notificationInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notificationInput"></a>

```java
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationNotification getNotificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.sourceInput"></a>

```java
public DataDatabricksAlertsV2AlertsEvaluationSource getSourceInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.thresholdInput"></a>

```java
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationThreshold getThresholdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `emptyResultState`<sup>Required</sup> <a name="emptyResultState" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultState"></a>

```java
public java.lang.String getEmptyResultState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.internalValue"></a>

```java
public DataDatabricksAlertsV2AlertsEvaluation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation">DataDatabricksAlertsV2AlertsEvaluation</a>

---


### DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference;

new DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregation` <a name="resetAggregation" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetAggregation"></a>

```java
public void resetAggregation()
```

##### `resetDisplay` <a name="resetDisplay" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetDisplay"></a>

```java
public void resetDisplay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.displayInput">displayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregationInput"></a>

```java
public java.lang.String getAggregationInput();
```

- *Type:* java.lang.String

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.displayInput"></a>

```java
public java.lang.String getDisplayInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.internalValue"></a>

```java
public DataDatabricksAlertsV2AlertsEvaluationSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>

---


### DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference;

new DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregation` <a name="resetAggregation" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetAggregation"></a>

```java
public void resetAggregation()
```

##### `resetDisplay` <a name="resetDisplay" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetDisplay"></a>

```java
public void resetDisplay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.displayInput">displayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregationInput"></a>

```java
public java.lang.String getAggregationInput();
```

- *Type:* java.lang.String

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.displayInput"></a>

```java
public java.lang.String getDisplayInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationThresholdColumn getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>

---


### DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference;

new DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putColumn">putColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetColumn">resetColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumn` <a name="putColumn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putColumn"></a>

```java
public void putColumn(DataDatabricksAlertsV2AlertsEvaluationThresholdColumn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putColumn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>

---

##### `putValue` <a name="putValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putValue"></a>

```java
public void putValue(DataDatabricksAlertsV2AlertsEvaluationThresholdValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>

---

##### `resetColumn` <a name="resetColumn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetColumn"></a>

```java
public void resetColumn()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.column">column</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.columnInput">columnInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.valueInput">valueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.column"></a>

```java
public DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference getColumn();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.value"></a>

```java
public DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference getValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.columnInput"></a>

```java
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationThresholdColumn getColumnInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.valueInput"></a>

```java
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationThresholdValue getValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationThreshold getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>

---


### DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference;

new DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetBoolValue"></a>

```java
public void resetBoolValue()
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetDoubleValue"></a>

```java
public void resetDoubleValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValueInput"></a>

```java
public java.lang.Boolean|IResolvable getBoolValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValueInput"></a>

```java
public java.lang.Number getDoubleValueInput();
```

- *Type:* java.lang.Number

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationThresholdValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>

---


### DataDatabricksAlertsV2AlertsList <a name="DataDatabricksAlertsV2AlertsList" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsList;

new DataDatabricksAlertsV2AlertsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.get"></a>

```java
public DataDatabricksAlertsV2AlertsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksAlertsV2Alerts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a>>

---


### DataDatabricksAlertsV2AlertsOutputReference <a name="DataDatabricksAlertsV2AlertsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsOutputReference;

new DataDatabricksAlertsV2AlertsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksAlertsV2AlertsProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig">DataDatabricksAlertsV2AlertsProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customDescription">customDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customSummary">customSummary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.effectiveRunAs">effectiveRunAs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference">DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.evaluation">evaluation</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference">DataDatabricksAlertsV2AlertsEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.ownerUserName">ownerUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList">DataDatabricksAlertsV2AlertsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parentPath">parentPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference">DataDatabricksAlertsV2AlertsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.queryText">queryText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAs">runAs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference">DataDatabricksAlertsV2AlertsRunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsUserName">runAsUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference">DataDatabricksAlertsV2AlertsScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig">DataDatabricksAlertsV2AlertsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `customDescription`<sup>Required</sup> <a name="customDescription" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customDescription"></a>

```java
public java.lang.String getCustomDescription();
```

- *Type:* java.lang.String

---

##### `customSummary`<sup>Required</sup> <a name="customSummary" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customSummary"></a>

```java
public java.lang.String getCustomSummary();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `effectiveRunAs`<sup>Required</sup> <a name="effectiveRunAs" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.effectiveRunAs"></a>

```java
public DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference getEffectiveRunAs();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference">DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference</a>

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.evaluation"></a>

```java
public DataDatabricksAlertsV2AlertsEvaluationOutputReference getEvaluation();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference">DataDatabricksAlertsV2AlertsEvaluationOutputReference</a>

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `ownerUserName`<sup>Required</sup> <a name="ownerUserName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.ownerUserName"></a>

```java
public java.lang.String getOwnerUserName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parameters"></a>

```java
public DataDatabricksAlertsV2AlertsParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList">DataDatabricksAlertsV2AlertsParametersList</a>

---

##### `parentPath`<sup>Required</sup> <a name="parentPath" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parentPath"></a>

```java
public java.lang.String getParentPath();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.providerConfig"></a>

```java
public DataDatabricksAlertsV2AlertsProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference">DataDatabricksAlertsV2AlertsProviderConfigOutputReference</a>

---

##### `queryText`<sup>Required</sup> <a name="queryText" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.queryText"></a>

```java
public java.lang.String getQueryText();
```

- *Type:* java.lang.String

---

##### `runAs`<sup>Required</sup> <a name="runAs" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAs"></a>

```java
public DataDatabricksAlertsV2AlertsRunAsOutputReference getRunAs();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference">DataDatabricksAlertsV2AlertsRunAsOutputReference</a>

---

##### `runAsUserName`<sup>Required</sup> <a name="runAsUserName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsUserName"></a>

```java
public java.lang.String getRunAsUserName();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.schedule"></a>

```java
public DataDatabricksAlertsV2AlertsScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference">DataDatabricksAlertsV2AlertsScheduleOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksAlertsV2AlertsProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig">DataDatabricksAlertsV2AlertsProviderConfig</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.internalValue"></a>

```java
public DataDatabricksAlertsV2Alerts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a>

---


### DataDatabricksAlertsV2AlertsParametersList <a name="DataDatabricksAlertsV2AlertsParametersList" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsParametersList;

new DataDatabricksAlertsV2AlertsParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.get"></a>

```java
public DataDatabricksAlertsV2AlertsParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters">DataDatabricksAlertsV2AlertsParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksAlertsV2AlertsParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters">DataDatabricksAlertsV2AlertsParameters</a>>

---


### DataDatabricksAlertsV2AlertsParametersOutputReference <a name="DataDatabricksAlertsV2AlertsParametersOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsParametersOutputReference;

new DataDatabricksAlertsV2AlertsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters">DataDatabricksAlertsV2AlertsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.internalValue"></a>

```java
public DataDatabricksAlertsV2AlertsParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters">DataDatabricksAlertsV2AlertsParameters</a>

---


### DataDatabricksAlertsV2AlertsProviderConfigOutputReference <a name="DataDatabricksAlertsV2AlertsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference;

new DataDatabricksAlertsV2AlertsProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig">DataDatabricksAlertsV2AlertsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAlertsV2AlertsProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig">DataDatabricksAlertsV2AlertsProviderConfig</a>

---


### DataDatabricksAlertsV2AlertsRunAsOutputReference <a name="DataDatabricksAlertsV2AlertsRunAsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsRunAsOutputReference;

new DataDatabricksAlertsV2AlertsRunAsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetServicePrincipalName">resetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServicePrincipalName` <a name="resetServicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetServicePrincipalName"></a>

```java
public void resetServicePrincipalName()
```

##### `resetUserName` <a name="resetUserName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetUserName"></a>

```java
public void resetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalNameInput">servicePrincipalNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalName">servicePrincipalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs">DataDatabricksAlertsV2AlertsRunAs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `servicePrincipalNameInput`<sup>Optional</sup> <a name="servicePrincipalNameInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalNameInput"></a>

```java
public java.lang.String getServicePrincipalNameInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalName`<sup>Required</sup> <a name="servicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalName"></a>

```java
public java.lang.String getServicePrincipalName();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.internalValue"></a>

```java
public DataDatabricksAlertsV2AlertsRunAs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs">DataDatabricksAlertsV2AlertsRunAs</a>

---


### DataDatabricksAlertsV2AlertsScheduleOutputReference <a name="DataDatabricksAlertsV2AlertsScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2AlertsScheduleOutputReference;

new DataDatabricksAlertsV2AlertsScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetPauseStatus">resetPauseStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPauseStatus` <a name="resetPauseStatus" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetPauseStatus"></a>

```java
public void resetPauseStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatusInput">pauseStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronScheduleInput">quartzCronScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneIdInput">timezoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatus">pauseStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronSchedule">quartzCronSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule">DataDatabricksAlertsV2AlertsSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pauseStatusInput`<sup>Optional</sup> <a name="pauseStatusInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatusInput"></a>

```java
public java.lang.String getPauseStatusInput();
```

- *Type:* java.lang.String

---

##### `quartzCronScheduleInput`<sup>Optional</sup> <a name="quartzCronScheduleInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronScheduleInput"></a>

```java
public java.lang.String getQuartzCronScheduleInput();
```

- *Type:* java.lang.String

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneIdInput"></a>

```java
public java.lang.String getTimezoneIdInput();
```

- *Type:* java.lang.String

---

##### `pauseStatus`<sup>Required</sup> <a name="pauseStatus" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatus"></a>

```java
public java.lang.String getPauseStatus();
```

- *Type:* java.lang.String

---

##### `quartzCronSchedule`<sup>Required</sup> <a name="quartzCronSchedule" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronSchedule"></a>

```java
public java.lang.String getQuartzCronSchedule();
```

- *Type:* java.lang.String

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.internalValue"></a>

```java
public DataDatabricksAlertsV2AlertsSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule">DataDatabricksAlertsV2AlertsSchedule</a>

---


### DataDatabricksAlertsV2ProviderConfigOutputReference <a name="DataDatabricksAlertsV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alerts_v2.DataDatabricksAlertsV2ProviderConfigOutputReference;

new DataDatabricksAlertsV2ProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig">DataDatabricksAlertsV2ProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAlertsV2ProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig">DataDatabricksAlertsV2ProviderConfig</a>

---



