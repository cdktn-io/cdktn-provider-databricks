# `dataDatabricksAlertV2` Submodule <a name="`dataDatabricksAlertV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksAlertV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAlertV2 <a name="DataDatabricksAlertV2" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2 databricks_alert_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2;

DataDatabricksAlertV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
//  .providerConfig(DataDatabricksAlertV2ProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#id DataDatabricksAlertV2#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfig">DataDatabricksAlertV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#provider_config DataDatabricksAlertV2#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#id DataDatabricksAlertV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfig">DataDatabricksAlertV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#provider_config DataDatabricksAlertV2#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksAlertV2ProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfig">DataDatabricksAlertV2ProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAlertV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2;

DataDatabricksAlertV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2;

DataDatabricksAlertV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2;

DataDatabricksAlertV2.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2;

DataDatabricksAlertV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksAlertV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksAlertV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksAlertV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksAlertV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAlertV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescription">customDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummary">customSummary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.effectiveRunAs">effectiveRunAs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference">DataDatabricksAlertV2EffectiveRunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluation">evaluation</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference">DataDatabricksAlertV2EvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.ownerUserName">ownerUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPath">parentPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference">DataDatabricksAlertV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryText">queryText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAs">runAs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference">DataDatabricksAlertV2RunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsUserName">runAsUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference">DataDatabricksAlertV2ScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfig">DataDatabricksAlertV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `customDescription`<sup>Required</sup> <a name="customDescription" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescription"></a>

```java
public java.lang.String getCustomDescription();
```

- *Type:* java.lang.String

---

##### `customSummary`<sup>Required</sup> <a name="customSummary" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummary"></a>

```java
public java.lang.String getCustomSummary();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `effectiveRunAs`<sup>Required</sup> <a name="effectiveRunAs" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.effectiveRunAs"></a>

```java
public DataDatabricksAlertV2EffectiveRunAsOutputReference getEffectiveRunAs();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference">DataDatabricksAlertV2EffectiveRunAsOutputReference</a>

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluation"></a>

```java
public DataDatabricksAlertV2EvaluationOutputReference getEvaluation();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference">DataDatabricksAlertV2EvaluationOutputReference</a>

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `ownerUserName`<sup>Required</sup> <a name="ownerUserName" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.ownerUserName"></a>

```java
public java.lang.String getOwnerUserName();
```

- *Type:* java.lang.String

---

##### `parentPath`<sup>Required</sup> <a name="parentPath" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPath"></a>

```java
public java.lang.String getParentPath();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.providerConfig"></a>

```java
public DataDatabricksAlertV2ProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference">DataDatabricksAlertV2ProviderConfigOutputReference</a>

---

##### `queryText`<sup>Required</sup> <a name="queryText" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryText"></a>

```java
public java.lang.String getQueryText();
```

- *Type:* java.lang.String

---

##### `runAs`<sup>Required</sup> <a name="runAs" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAs"></a>

```java
public DataDatabricksAlertV2RunAsOutputReference getRunAs();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference">DataDatabricksAlertV2RunAsOutputReference</a>

---

##### `runAsUserName`<sup>Required</sup> <a name="runAsUserName" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsUserName"></a>

```java
public java.lang.String getRunAsUserName();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.schedule"></a>

```java
public DataDatabricksAlertV2ScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference">DataDatabricksAlertV2ScheduleOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksAlertV2ProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfig">DataDatabricksAlertV2ProviderConfig</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAlertV2Config <a name="DataDatabricksAlertV2Config" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2Config;

DataDatabricksAlertV2Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
//  .providerConfig(DataDatabricksAlertV2ProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#id DataDatabricksAlertV2#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfig">DataDatabricksAlertV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#provider_config DataDatabricksAlertV2#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#id DataDatabricksAlertV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.providerConfig"></a>

```java
public DataDatabricksAlertV2ProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfig">DataDatabricksAlertV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#provider_config DataDatabricksAlertV2#provider_config}.

---

### DataDatabricksAlertV2EffectiveRunAs <a name="DataDatabricksAlertV2EffectiveRunAs" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2EffectiveRunAs;

DataDatabricksAlertV2EffectiveRunAs.builder()
//  .servicePrincipalName(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.property.servicePrincipalName">servicePrincipalName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#service_principal_name DataDatabricksAlertV2#service_principal_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#user_name DataDatabricksAlertV2#user_name}. |

---

##### `servicePrincipalName`<sup>Optional</sup> <a name="servicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.property.servicePrincipalName"></a>

```java
public java.lang.String getServicePrincipalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#service_principal_name DataDatabricksAlertV2#service_principal_name}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#user_name DataDatabricksAlertV2#user_name}.

---

### DataDatabricksAlertV2Evaluation <a name="DataDatabricksAlertV2Evaluation" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2Evaluation;

DataDatabricksAlertV2Evaluation.builder()
    .comparisonOperator(java.lang.String)
    .source(DataDatabricksAlertV2EvaluationSource)
//  .emptyResultState(java.lang.String)
//  .notification(DataDatabricksAlertV2EvaluationNotification)
//  .threshold(DataDatabricksAlertV2EvaluationThreshold)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#comparison_operator DataDatabricksAlertV2#comparison_operator}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.source">source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#source DataDatabricksAlertV2#source}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.emptyResultState">emptyResultState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#empty_result_state DataDatabricksAlertV2#empty_result_state}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.notification">notification</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#notification DataDatabricksAlertV2#notification}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.threshold">threshold</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#threshold DataDatabricksAlertV2#threshold}. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#comparison_operator DataDatabricksAlertV2#comparison_operator}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.source"></a>

```java
public DataDatabricksAlertV2EvaluationSource getSource();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#source DataDatabricksAlertV2#source}.

---

##### `emptyResultState`<sup>Optional</sup> <a name="emptyResultState" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.emptyResultState"></a>

```java
public java.lang.String getEmptyResultState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#empty_result_state DataDatabricksAlertV2#empty_result_state}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.notification"></a>

```java
public DataDatabricksAlertV2EvaluationNotification getNotification();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#notification DataDatabricksAlertV2#notification}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.threshold"></a>

```java
public DataDatabricksAlertV2EvaluationThreshold getThreshold();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#threshold DataDatabricksAlertV2#threshold}.

---

### DataDatabricksAlertV2EvaluationNotification <a name="DataDatabricksAlertV2EvaluationNotification" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2EvaluationNotification;

DataDatabricksAlertV2EvaluationNotification.builder()
//  .notifyOnOk(java.lang.Boolean|IResolvable)
//  .retriggerSeconds(java.lang.Number)
//  .subscriptions(IResolvable|java.util.List<DataDatabricksAlertV2EvaluationNotificationSubscriptions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.notifyOnOk">notifyOnOk</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#notify_on_ok DataDatabricksAlertV2#notify_on_ok}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.retriggerSeconds">retriggerSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#retrigger_seconds DataDatabricksAlertV2#retrigger_seconds}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.subscriptions">subscriptions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#subscriptions DataDatabricksAlertV2#subscriptions}. |

---

##### `notifyOnOk`<sup>Optional</sup> <a name="notifyOnOk" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.notifyOnOk"></a>

```java
public java.lang.Boolean|IResolvable getNotifyOnOk();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#notify_on_ok DataDatabricksAlertV2#notify_on_ok}.

---

##### `retriggerSeconds`<sup>Optional</sup> <a name="retriggerSeconds" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.retriggerSeconds"></a>

```java
public java.lang.Number getRetriggerSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#retrigger_seconds DataDatabricksAlertV2#retrigger_seconds}.

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.subscriptions"></a>

```java
public IResolvable|java.util.List<DataDatabricksAlertV2EvaluationNotificationSubscriptions> getSubscriptions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#subscriptions DataDatabricksAlertV2#subscriptions}.

---

### DataDatabricksAlertV2EvaluationNotificationSubscriptions <a name="DataDatabricksAlertV2EvaluationNotificationSubscriptions" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2EvaluationNotificationSubscriptions;

DataDatabricksAlertV2EvaluationNotificationSubscriptions.builder()
//  .destinationId(java.lang.String)
//  .userEmail(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.destinationId">destinationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#destination_id DataDatabricksAlertV2#destination_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.userEmail">userEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#user_email DataDatabricksAlertV2#user_email}. |

---

##### `destinationId`<sup>Optional</sup> <a name="destinationId" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.destinationId"></a>

```java
public java.lang.String getDestinationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#destination_id DataDatabricksAlertV2#destination_id}.

---

##### `userEmail`<sup>Optional</sup> <a name="userEmail" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.userEmail"></a>

```java
public java.lang.String getUserEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#user_email DataDatabricksAlertV2#user_email}.

---

### DataDatabricksAlertV2EvaluationSource <a name="DataDatabricksAlertV2EvaluationSource" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2EvaluationSource;

DataDatabricksAlertV2EvaluationSource.builder()
    .name(java.lang.String)
//  .aggregation(java.lang.String)
//  .display(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.display">display</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}.

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}.

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}.

---

### DataDatabricksAlertV2EvaluationThreshold <a name="DataDatabricksAlertV2EvaluationThreshold" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2EvaluationThreshold;

DataDatabricksAlertV2EvaluationThreshold.builder()
//  .column(DataDatabricksAlertV2EvaluationThresholdColumn)
//  .value(DataDatabricksAlertV2EvaluationThresholdValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.column">column</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#column DataDatabricksAlertV2#column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.value">value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#value DataDatabricksAlertV2#value}. |

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.column"></a>

```java
public DataDatabricksAlertV2EvaluationThresholdColumn getColumn();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#column DataDatabricksAlertV2#column}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.value"></a>

```java
public DataDatabricksAlertV2EvaluationThresholdValue getValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#value DataDatabricksAlertV2#value}.

---

### DataDatabricksAlertV2EvaluationThresholdColumn <a name="DataDatabricksAlertV2EvaluationThresholdColumn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2EvaluationThresholdColumn;

DataDatabricksAlertV2EvaluationThresholdColumn.builder()
    .name(java.lang.String)
//  .aggregation(java.lang.String)
//  .display(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.display">display</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}.

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}.

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}.

---

### DataDatabricksAlertV2EvaluationThresholdValue <a name="DataDatabricksAlertV2EvaluationThresholdValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2EvaluationThresholdValue;

DataDatabricksAlertV2EvaluationThresholdValue.builder()
//  .boolValue(java.lang.Boolean|IResolvable)
//  .doubleValue(java.lang.Number)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#bool_value DataDatabricksAlertV2#bool_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#double_value DataDatabricksAlertV2#double_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#string_value DataDatabricksAlertV2#string_value}. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#bool_value DataDatabricksAlertV2#bool_value}.

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#double_value DataDatabricksAlertV2#double_value}.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#string_value DataDatabricksAlertV2#string_value}.

---

### DataDatabricksAlertV2ProviderConfig <a name="DataDatabricksAlertV2ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2ProviderConfig;

DataDatabricksAlertV2ProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#workspace_id DataDatabricksAlertV2#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#workspace_id DataDatabricksAlertV2#workspace_id}.

---

### DataDatabricksAlertV2RunAs <a name="DataDatabricksAlertV2RunAs" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2RunAs;

DataDatabricksAlertV2RunAs.builder()
//  .servicePrincipalName(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.property.servicePrincipalName">servicePrincipalName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#service_principal_name DataDatabricksAlertV2#service_principal_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#user_name DataDatabricksAlertV2#user_name}. |

---

##### `servicePrincipalName`<sup>Optional</sup> <a name="servicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.property.servicePrincipalName"></a>

```java
public java.lang.String getServicePrincipalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#service_principal_name DataDatabricksAlertV2#service_principal_name}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#user_name DataDatabricksAlertV2#user_name}.

---

### DataDatabricksAlertV2Schedule <a name="DataDatabricksAlertV2Schedule" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2Schedule;

DataDatabricksAlertV2Schedule.builder()
    .quartzCronSchedule(java.lang.String)
    .timezoneId(java.lang.String)
//  .pauseStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.quartzCronSchedule">quartzCronSchedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#quartz_cron_schedule DataDatabricksAlertV2#quartz_cron_schedule}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#timezone_id DataDatabricksAlertV2#timezone_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.pauseStatus">pauseStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#pause_status DataDatabricksAlertV2#pause_status}. |

---

##### `quartzCronSchedule`<sup>Required</sup> <a name="quartzCronSchedule" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.quartzCronSchedule"></a>

```java
public java.lang.String getQuartzCronSchedule();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#quartz_cron_schedule DataDatabricksAlertV2#quartz_cron_schedule}.

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#timezone_id DataDatabricksAlertV2#timezone_id}.

---

##### `pauseStatus`<sup>Optional</sup> <a name="pauseStatus" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.pauseStatus"></a>

```java
public java.lang.String getPauseStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/alert_v2#pause_status DataDatabricksAlertV2#pause_status}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAlertV2EffectiveRunAsOutputReference <a name="DataDatabricksAlertV2EffectiveRunAsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2EffectiveRunAsOutputReference;

new DataDatabricksAlertV2EffectiveRunAsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resetServicePrincipalName">resetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServicePrincipalName` <a name="resetServicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resetServicePrincipalName"></a>

```java
public void resetServicePrincipalName()
```

##### `resetUserName` <a name="resetUserName" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resetUserName"></a>

```java
public void resetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.servicePrincipalNameInput">servicePrincipalNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.servicePrincipalName">servicePrincipalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs">DataDatabricksAlertV2EffectiveRunAs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `servicePrincipalNameInput`<sup>Optional</sup> <a name="servicePrincipalNameInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.servicePrincipalNameInput"></a>

```java
public java.lang.String getServicePrincipalNameInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalName`<sup>Required</sup> <a name="servicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.servicePrincipalName"></a>

```java
public java.lang.String getServicePrincipalName();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.internalValue"></a>

```java
public DataDatabricksAlertV2EffectiveRunAs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs">DataDatabricksAlertV2EffectiveRunAs</a>

---


### DataDatabricksAlertV2EvaluationNotificationOutputReference <a name="DataDatabricksAlertV2EvaluationNotificationOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2EvaluationNotificationOutputReference;

new DataDatabricksAlertV2EvaluationNotificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.putSubscriptions">putSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetNotifyOnOk">resetNotifyOnOk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetRetriggerSeconds">resetRetriggerSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetSubscriptions">resetSubscriptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubscriptions` <a name="putSubscriptions" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.putSubscriptions"></a>

```java
public void putSubscriptions(IResolvable|java.util.List<DataDatabricksAlertV2EvaluationNotificationSubscriptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.putSubscriptions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>>

---

##### `resetNotifyOnOk` <a name="resetNotifyOnOk" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetNotifyOnOk"></a>

```java
public void resetNotifyOnOk()
```

##### `resetRetriggerSeconds` <a name="resetRetriggerSeconds" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetRetriggerSeconds"></a>

```java
public void resetRetriggerSeconds()
```

##### `resetSubscriptions` <a name="resetSubscriptions" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetSubscriptions"></a>

```java
public void resetSubscriptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.effectiveNotifyOnOk">effectiveNotifyOnOk</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.effectiveRetriggerSeconds">effectiveRetriggerSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptions">subscriptions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList">DataDatabricksAlertV2EvaluationNotificationSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOkInput">notifyOnOkInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSecondsInput">retriggerSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptionsInput">subscriptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOk">notifyOnOk</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSeconds">retriggerSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveNotifyOnOk`<sup>Required</sup> <a name="effectiveNotifyOnOk" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.effectiveNotifyOnOk"></a>

```java
public IResolvable getEffectiveNotifyOnOk();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `effectiveRetriggerSeconds`<sup>Required</sup> <a name="effectiveRetriggerSeconds" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.effectiveRetriggerSeconds"></a>

```java
public java.lang.Number getEffectiveRetriggerSeconds();
```

- *Type:* java.lang.Number

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptions"></a>

```java
public DataDatabricksAlertV2EvaluationNotificationSubscriptionsList getSubscriptions();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList">DataDatabricksAlertV2EvaluationNotificationSubscriptionsList</a>

---

##### `notifyOnOkInput`<sup>Optional</sup> <a name="notifyOnOkInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOkInput"></a>

```java
public java.lang.Boolean|IResolvable getNotifyOnOkInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retriggerSecondsInput`<sup>Optional</sup> <a name="retriggerSecondsInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSecondsInput"></a>

```java
public java.lang.Number getRetriggerSecondsInput();
```

- *Type:* java.lang.Number

---

##### `subscriptionsInput`<sup>Optional</sup> <a name="subscriptionsInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptionsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksAlertV2EvaluationNotificationSubscriptions> getSubscriptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>>

---

##### `notifyOnOk`<sup>Required</sup> <a name="notifyOnOk" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOk"></a>

```java
public java.lang.Boolean|IResolvable getNotifyOnOk();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retriggerSeconds`<sup>Required</sup> <a name="retriggerSeconds" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSeconds"></a>

```java
public java.lang.Number getRetriggerSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAlertV2EvaluationNotification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>

---


### DataDatabricksAlertV2EvaluationNotificationSubscriptionsList <a name="DataDatabricksAlertV2EvaluationNotificationSubscriptionsList" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList;

new DataDatabricksAlertV2EvaluationNotificationSubscriptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.get"></a>

```java
public DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksAlertV2EvaluationNotificationSubscriptions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>>

---


### DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference <a name="DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference;

new DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetDestinationId">resetDestinationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetUserEmail">resetUserEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationId` <a name="resetDestinationId" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetDestinationId"></a>

```java
public void resetDestinationId()
```

##### `resetUserEmail` <a name="resetUserEmail" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetUserEmail"></a>

```java
public void resetUserEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput">destinationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmailInput">userEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationId">destinationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmail">userEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationIdInput`<sup>Optional</sup> <a name="destinationIdInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput"></a>

```java
public java.lang.String getDestinationIdInput();
```

- *Type:* java.lang.String

---

##### `userEmailInput`<sup>Optional</sup> <a name="userEmailInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmailInput"></a>

```java
public java.lang.String getUserEmailInput();
```

- *Type:* java.lang.String

---

##### `destinationId`<sup>Required</sup> <a name="destinationId" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationId"></a>

```java
public java.lang.String getDestinationId();
```

- *Type:* java.lang.String

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmail"></a>

```java
public java.lang.String getUserEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAlertV2EvaluationNotificationSubscriptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>

---


### DataDatabricksAlertV2EvaluationOutputReference <a name="DataDatabricksAlertV2EvaluationOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2EvaluationOutputReference;

new DataDatabricksAlertV2EvaluationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putNotification">putNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putThreshold">putThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetEmptyResultState">resetEmptyResultState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetNotification">resetNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotification` <a name="putNotification" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putNotification"></a>

```java
public void putNotification(DataDatabricksAlertV2EvaluationNotification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putNotification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putSource"></a>

```java
public void putSource(DataDatabricksAlertV2EvaluationSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>

---

##### `putThreshold` <a name="putThreshold" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putThreshold"></a>

```java
public void putThreshold(DataDatabricksAlertV2EvaluationThreshold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>

---

##### `resetEmptyResultState` <a name="resetEmptyResultState" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetEmptyResultState"></a>

```java
public void resetEmptyResultState()
```

##### `resetNotification` <a name="resetNotification" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetNotification"></a>

```java
public void resetNotification()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.lastEvaluatedAt">lastEvaluatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notification">notification</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference">DataDatabricksAlertV2EvaluationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference">DataDatabricksAlertV2EvaluationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.threshold">threshold</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference">DataDatabricksAlertV2EvaluationThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultStateInput">emptyResultStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notificationInput">notificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultState">emptyResultState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastEvaluatedAt`<sup>Required</sup> <a name="lastEvaluatedAt" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.lastEvaluatedAt"></a>

```java
public java.lang.String getLastEvaluatedAt();
```

- *Type:* java.lang.String

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notification"></a>

```java
public DataDatabricksAlertV2EvaluationNotificationOutputReference getNotification();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference">DataDatabricksAlertV2EvaluationNotificationOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.source"></a>

```java
public DataDatabricksAlertV2EvaluationSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference">DataDatabricksAlertV2EvaluationSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.threshold"></a>

```java
public DataDatabricksAlertV2EvaluationThresholdOutputReference getThreshold();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference">DataDatabricksAlertV2EvaluationThresholdOutputReference</a>

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `emptyResultStateInput`<sup>Optional</sup> <a name="emptyResultStateInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultStateInput"></a>

```java
public java.lang.String getEmptyResultStateInput();
```

- *Type:* java.lang.String

---

##### `notificationInput`<sup>Optional</sup> <a name="notificationInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notificationInput"></a>

```java
public IResolvable|DataDatabricksAlertV2EvaluationNotification getNotificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.sourceInput"></a>

```java
public DataDatabricksAlertV2EvaluationSource getSourceInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.thresholdInput"></a>

```java
public IResolvable|DataDatabricksAlertV2EvaluationThreshold getThresholdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `emptyResultState`<sup>Required</sup> <a name="emptyResultState" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultState"></a>

```java
public java.lang.String getEmptyResultState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.internalValue"></a>

```java
public DataDatabricksAlertV2Evaluation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a>

---


### DataDatabricksAlertV2EvaluationSourceOutputReference <a name="DataDatabricksAlertV2EvaluationSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2EvaluationSourceOutputReference;

new DataDatabricksAlertV2EvaluationSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregation` <a name="resetAggregation" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetAggregation"></a>

```java
public void resetAggregation()
```

##### `resetDisplay` <a name="resetDisplay" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetDisplay"></a>

```java
public void resetDisplay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.displayInput">displayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregationInput"></a>

```java
public java.lang.String getAggregationInput();
```

- *Type:* java.lang.String

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.displayInput"></a>

```java
public java.lang.String getDisplayInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.internalValue"></a>

```java
public DataDatabricksAlertV2EvaluationSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>

---


### DataDatabricksAlertV2EvaluationThresholdColumnOutputReference <a name="DataDatabricksAlertV2EvaluationThresholdColumnOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference;

new DataDatabricksAlertV2EvaluationThresholdColumnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregation` <a name="resetAggregation" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetAggregation"></a>

```java
public void resetAggregation()
```

##### `resetDisplay` <a name="resetDisplay" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetDisplay"></a>

```java
public void resetDisplay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.displayInput">displayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregationInput"></a>

```java
public java.lang.String getAggregationInput();
```

- *Type:* java.lang.String

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.displayInput"></a>

```java
public java.lang.String getDisplayInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAlertV2EvaluationThresholdColumn getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>

---


### DataDatabricksAlertV2EvaluationThresholdOutputReference <a name="DataDatabricksAlertV2EvaluationThresholdOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2EvaluationThresholdOutputReference;

new DataDatabricksAlertV2EvaluationThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putColumn">putColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetColumn">resetColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumn` <a name="putColumn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putColumn"></a>

```java
public void putColumn(DataDatabricksAlertV2EvaluationThresholdColumn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putColumn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>

---

##### `putValue` <a name="putValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putValue"></a>

```java
public void putValue(DataDatabricksAlertV2EvaluationThresholdValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>

---

##### `resetColumn` <a name="resetColumn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetColumn"></a>

```java
public void resetColumn()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.column">column</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference">DataDatabricksAlertV2EvaluationThresholdColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference">DataDatabricksAlertV2EvaluationThresholdValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.columnInput">columnInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.valueInput">valueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.column"></a>

```java
public DataDatabricksAlertV2EvaluationThresholdColumnOutputReference getColumn();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference">DataDatabricksAlertV2EvaluationThresholdColumnOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.value"></a>

```java
public DataDatabricksAlertV2EvaluationThresholdValueOutputReference getValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference">DataDatabricksAlertV2EvaluationThresholdValueOutputReference</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.columnInput"></a>

```java
public IResolvable|DataDatabricksAlertV2EvaluationThresholdColumn getColumnInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.valueInput"></a>

```java
public IResolvable|DataDatabricksAlertV2EvaluationThresholdValue getValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAlertV2EvaluationThreshold getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>

---


### DataDatabricksAlertV2EvaluationThresholdValueOutputReference <a name="DataDatabricksAlertV2EvaluationThresholdValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference;

new DataDatabricksAlertV2EvaluationThresholdValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetBoolValue"></a>

```java
public void resetBoolValue()
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetDoubleValue"></a>

```java
public void resetDoubleValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValueInput"></a>

```java
public java.lang.Boolean|IResolvable getBoolValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValueInput"></a>

```java
public java.lang.Number getDoubleValueInput();
```

- *Type:* java.lang.Number

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAlertV2EvaluationThresholdValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>

---


### DataDatabricksAlertV2ProviderConfigOutputReference <a name="DataDatabricksAlertV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2ProviderConfigOutputReference;

new DataDatabricksAlertV2ProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfig">DataDatabricksAlertV2ProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAlertV2ProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ProviderConfig">DataDatabricksAlertV2ProviderConfig</a>

---


### DataDatabricksAlertV2RunAsOutputReference <a name="DataDatabricksAlertV2RunAsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2RunAsOutputReference;

new DataDatabricksAlertV2RunAsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resetServicePrincipalName">resetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServicePrincipalName` <a name="resetServicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resetServicePrincipalName"></a>

```java
public void resetServicePrincipalName()
```

##### `resetUserName` <a name="resetUserName" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resetUserName"></a>

```java
public void resetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.servicePrincipalNameInput">servicePrincipalNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.servicePrincipalName">servicePrincipalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `servicePrincipalNameInput`<sup>Optional</sup> <a name="servicePrincipalNameInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.servicePrincipalNameInput"></a>

```java
public java.lang.String getServicePrincipalNameInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalName`<sup>Required</sup> <a name="servicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.servicePrincipalName"></a>

```java
public java.lang.String getServicePrincipalName();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.internalValue"></a>

```java
public DataDatabricksAlertV2RunAs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a>

---


### DataDatabricksAlertV2ScheduleOutputReference <a name="DataDatabricksAlertV2ScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_alert_v2.DataDatabricksAlertV2ScheduleOutputReference;

new DataDatabricksAlertV2ScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetPauseStatus">resetPauseStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPauseStatus` <a name="resetPauseStatus" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetPauseStatus"></a>

```java
public void resetPauseStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatusInput">pauseStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronScheduleInput">quartzCronScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneIdInput">timezoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatus">pauseStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronSchedule">quartzCronSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pauseStatusInput`<sup>Optional</sup> <a name="pauseStatusInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatusInput"></a>

```java
public java.lang.String getPauseStatusInput();
```

- *Type:* java.lang.String

---

##### `quartzCronScheduleInput`<sup>Optional</sup> <a name="quartzCronScheduleInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronScheduleInput"></a>

```java
public java.lang.String getQuartzCronScheduleInput();
```

- *Type:* java.lang.String

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneIdInput"></a>

```java
public java.lang.String getTimezoneIdInput();
```

- *Type:* java.lang.String

---

##### `pauseStatus`<sup>Required</sup> <a name="pauseStatus" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatus"></a>

```java
public java.lang.String getPauseStatus();
```

- *Type:* java.lang.String

---

##### `quartzCronSchedule`<sup>Required</sup> <a name="quartzCronSchedule" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronSchedule"></a>

```java
public java.lang.String getQuartzCronSchedule();
```

- *Type:* java.lang.String

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.internalValue"></a>

```java
public DataDatabricksAlertV2Schedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a>

---



