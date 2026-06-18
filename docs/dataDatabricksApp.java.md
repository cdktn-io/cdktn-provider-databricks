# `dataDatabricksApp` Submodule <a name="`dataDatabricksApp` Submodule" id="@cdktn/provider-databricks.dataDatabricksApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksApp <a name="DataDatabricksApp" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app databricks_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksApp;

DataDatabricksApp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .providerConfig(DataDatabricksAppProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfig">DataDatabricksAppProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#provider_config DataDatabricksApp#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfig">DataDatabricksAppProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#provider_config DataDatabricksApp#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksAppProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfig">DataDatabricksAppProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksApp;

DataDatabricksApp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksApp;

DataDatabricksApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksApp;

DataDatabricksApp.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksApp;

DataDatabricksApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference">DataDatabricksAppAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference">DataDatabricksAppProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfig">DataDatabricksAppProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.app"></a>

```java
public DataDatabricksAppAppOutputReference getApp();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference">DataDatabricksAppAppOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.providerConfig"></a>

```java
public DataDatabricksAppProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference">DataDatabricksAppProviderConfigOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksAppProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfig">DataDatabricksAppProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAppApp <a name="DataDatabricksAppApp" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppApp;

DataDatabricksAppApp.builder()
    .name(java.lang.String)
//  .budgetPolicyId(java.lang.String)
//  .computeMaxInstances(java.lang.Number)
//  .computeMinInstances(java.lang.Number)
//  .computeSize(java.lang.String)
//  .description(java.lang.String)
//  .gitRepository(DataDatabricksAppAppGitRepository)
//  .resources(IResolvable|java.util.List<DataDatabricksAppAppResources>)
//  .space(java.lang.String)
//  .telemetryExportDestinations(IResolvable|java.util.List<DataDatabricksAppAppTelemetryExportDestinations>)
//  .usagePolicyId(java.lang.String)
//  .userApiScopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#budget_policy_id DataDatabricksApp#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.computeMaxInstances">computeMaxInstances</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#compute_max_instances DataDatabricksApp#compute_max_instances}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.computeMinInstances">computeMinInstances</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#compute_min_instances DataDatabricksApp#compute_min_instances}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.computeSize">computeSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#compute_size DataDatabricksApp#compute_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#description DataDatabricksApp#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepository">DataDatabricksAppAppGitRepository</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#git_repository DataDatabricksApp#git_repository}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.resources">resources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources">DataDatabricksAppAppResources</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#resources DataDatabricksApp#resources}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.space">space</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#space DataDatabricksApp#space}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.telemetryExportDestinations">telemetryExportDestinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinations">DataDatabricksAppAppTelemetryExportDestinations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#telemetry_export_destinations DataDatabricksApp#telemetry_export_destinations}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.usagePolicyId">usagePolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#usage_policy_id DataDatabricksApp#usage_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.userApiScopes">userApiScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#user_api_scopes DataDatabricksApp#user_api_scopes}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}.

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.budgetPolicyId"></a>

```java
public java.lang.String getBudgetPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#budget_policy_id DataDatabricksApp#budget_policy_id}.

---

##### `computeMaxInstances`<sup>Optional</sup> <a name="computeMaxInstances" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.computeMaxInstances"></a>

```java
public java.lang.Number getComputeMaxInstances();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#compute_max_instances DataDatabricksApp#compute_max_instances}.

---

##### `computeMinInstances`<sup>Optional</sup> <a name="computeMinInstances" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.computeMinInstances"></a>

```java
public java.lang.Number getComputeMinInstances();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#compute_min_instances DataDatabricksApp#compute_min_instances}.

---

##### `computeSize`<sup>Optional</sup> <a name="computeSize" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.computeSize"></a>

```java
public java.lang.String getComputeSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#compute_size DataDatabricksApp#compute_size}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#description DataDatabricksApp#description}.

---

##### `gitRepository`<sup>Optional</sup> <a name="gitRepository" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.gitRepository"></a>

```java
public DataDatabricksAppAppGitRepository getGitRepository();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepository">DataDatabricksAppAppGitRepository</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#git_repository DataDatabricksApp#git_repository}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.resources"></a>

```java
public IResolvable|java.util.List<DataDatabricksAppAppResources> getResources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources">DataDatabricksAppAppResources</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#resources DataDatabricksApp#resources}.

---

##### `space`<sup>Optional</sup> <a name="space" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.space"></a>

```java
public java.lang.String getSpace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#space DataDatabricksApp#space}.

---

##### `telemetryExportDestinations`<sup>Optional</sup> <a name="telemetryExportDestinations" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.telemetryExportDestinations"></a>

```java
public IResolvable|java.util.List<DataDatabricksAppAppTelemetryExportDestinations> getTelemetryExportDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinations">DataDatabricksAppAppTelemetryExportDestinations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#telemetry_export_destinations DataDatabricksApp#telemetry_export_destinations}.

---

##### `usagePolicyId`<sup>Optional</sup> <a name="usagePolicyId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.usagePolicyId"></a>

```java
public java.lang.String getUsagePolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#usage_policy_id DataDatabricksApp#usage_policy_id}.

---

##### `userApiScopes`<sup>Optional</sup> <a name="userApiScopes" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp.property.userApiScopes"></a>

```java
public java.util.List<java.lang.String> getUserApiScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#user_api_scopes DataDatabricksApp#user_api_scopes}.

---

### DataDatabricksAppAppActiveDeployment <a name="DataDatabricksAppAppActiveDeployment" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeployment.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppActiveDeployment;

DataDatabricksAppAppActiveDeployment.builder()
//  .command(java.util.List<java.lang.String>)
//  .deploymentId(java.lang.String)
//  .envVars(IResolvable|java.util.List<DataDatabricksAppAppActiveDeploymentEnvVars>)
//  .gitSource(DataDatabricksAppAppActiveDeploymentGitSource)
//  .mode(java.lang.String)
//  .sourceCodePath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeployment.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#command DataDatabricksApp#command}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeployment.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#deployment_id DataDatabricksApp#deployment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeployment.property.envVars">envVars</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVars">DataDatabricksAppAppActiveDeploymentEnvVars</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#env_vars DataDatabricksApp#env_vars}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeployment.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSource">DataDatabricksAppAppActiveDeploymentGitSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#git_source DataDatabricksApp#git_source}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeployment.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#mode DataDatabricksApp#mode}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeployment.property.sourceCodePath">sourceCodePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#source_code_path DataDatabricksApp#source_code_path}. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeployment.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#command DataDatabricksApp#command}.

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeployment.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#deployment_id DataDatabricksApp#deployment_id}.

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeployment.property.envVars"></a>

```java
public IResolvable|java.util.List<DataDatabricksAppAppActiveDeploymentEnvVars> getEnvVars();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVars">DataDatabricksAppAppActiveDeploymentEnvVars</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#env_vars DataDatabricksApp#env_vars}.

---

##### `gitSource`<sup>Optional</sup> <a name="gitSource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeployment.property.gitSource"></a>

```java
public DataDatabricksAppAppActiveDeploymentGitSource getGitSource();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSource">DataDatabricksAppAppActiveDeploymentGitSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#git_source DataDatabricksApp#git_source}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeployment.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#mode DataDatabricksApp#mode}.

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeployment.property.sourceCodePath"></a>

```java
public java.lang.String getSourceCodePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#source_code_path DataDatabricksApp#source_code_path}.

---

### DataDatabricksAppAppActiveDeploymentDeploymentArtifacts <a name="DataDatabricksAppAppActiveDeploymentDeploymentArtifacts" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifacts.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppActiveDeploymentDeploymentArtifacts;

DataDatabricksAppAppActiveDeploymentDeploymentArtifacts.builder()
//  .sourceCodePath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifacts.property.sourceCodePath">sourceCodePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#source_code_path DataDatabricksApp#source_code_path}. |

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifacts.property.sourceCodePath"></a>

```java
public java.lang.String getSourceCodePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#source_code_path DataDatabricksApp#source_code_path}.

---

### DataDatabricksAppAppActiveDeploymentEnvVars <a name="DataDatabricksAppAppActiveDeploymentEnvVars" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVars"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVars.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppActiveDeploymentEnvVars;

DataDatabricksAppAppActiveDeploymentEnvVars.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
//  .valueFrom(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVars.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVars.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#value DataDatabricksApp#value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVars.property.valueFrom">valueFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#value_from DataDatabricksApp#value_from}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVars.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVars.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#value DataDatabricksApp#value}.

---

##### `valueFrom`<sup>Optional</sup> <a name="valueFrom" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVars.property.valueFrom"></a>

```java
public java.lang.String getValueFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#value_from DataDatabricksApp#value_from}.

---

### DataDatabricksAppAppActiveDeploymentGitSource <a name="DataDatabricksAppAppActiveDeploymentGitSource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSource.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppActiveDeploymentGitSource;

DataDatabricksAppAppActiveDeploymentGitSource.builder()
//  .branch(java.lang.String)
//  .commit(java.lang.String)
//  .sourceCodePath(java.lang.String)
//  .tag(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSource.property.branch">branch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#branch DataDatabricksApp#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSource.property.commit">commit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#commit DataDatabricksApp#commit}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSource.property.sourceCodePath">sourceCodePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#source_code_path DataDatabricksApp#source_code_path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSource.property.tag">tag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#tag DataDatabricksApp#tag}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSource.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#branch DataDatabricksApp#branch}.

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSource.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#commit DataDatabricksApp#commit}.

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSource.property.sourceCodePath"></a>

```java
public java.lang.String getSourceCodePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#source_code_path DataDatabricksApp#source_code_path}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSource.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#tag DataDatabricksApp#tag}.

---

### DataDatabricksAppAppActiveDeploymentGitSourceGitRepository <a name="DataDatabricksAppAppActiveDeploymentGitSourceGitRepository" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepository.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppActiveDeploymentGitSourceGitRepository;

DataDatabricksAppAppActiveDeploymentGitSourceGitRepository.builder()
    .provider(java.lang.String)
    .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepository.property.provider">provider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#provider DataDatabricksApp#provider}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepository.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#url DataDatabricksApp#url}. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepository.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#provider DataDatabricksApp#provider}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepository.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#url DataDatabricksApp#url}.

---

### DataDatabricksAppAppActiveDeploymentStatus <a name="DataDatabricksAppAppActiveDeploymentStatus" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppActiveDeploymentStatus;

DataDatabricksAppAppActiveDeploymentStatus.builder()
    .build();
```


### DataDatabricksAppAppAppStatus <a name="DataDatabricksAppAppAppStatus" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppAppStatus;

DataDatabricksAppAppAppStatus.builder()
    .build();
```


### DataDatabricksAppAppComputeStatus <a name="DataDatabricksAppAppComputeStatus" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppComputeStatus;

DataDatabricksAppAppComputeStatus.builder()
    .build();
```


### DataDatabricksAppAppGitRepository <a name="DataDatabricksAppAppGitRepository" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepository.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppGitRepository;

DataDatabricksAppAppGitRepository.builder()
    .provider(java.lang.String)
    .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepository.property.provider">provider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#provider DataDatabricksApp#provider}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepository.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#url DataDatabricksApp#url}. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepository.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#provider DataDatabricksApp#provider}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepository.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#url DataDatabricksApp#url}.

---

### DataDatabricksAppAppPendingDeployment <a name="DataDatabricksAppAppPendingDeployment" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeployment.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppPendingDeployment;

DataDatabricksAppAppPendingDeployment.builder()
//  .command(java.util.List<java.lang.String>)
//  .deploymentId(java.lang.String)
//  .envVars(IResolvable|java.util.List<DataDatabricksAppAppPendingDeploymentEnvVars>)
//  .gitSource(DataDatabricksAppAppPendingDeploymentGitSource)
//  .mode(java.lang.String)
//  .sourceCodePath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeployment.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#command DataDatabricksApp#command}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeployment.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#deployment_id DataDatabricksApp#deployment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeployment.property.envVars">envVars</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVars">DataDatabricksAppAppPendingDeploymentEnvVars</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#env_vars DataDatabricksApp#env_vars}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeployment.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSource">DataDatabricksAppAppPendingDeploymentGitSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#git_source DataDatabricksApp#git_source}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeployment.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#mode DataDatabricksApp#mode}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeployment.property.sourceCodePath">sourceCodePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#source_code_path DataDatabricksApp#source_code_path}. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeployment.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#command DataDatabricksApp#command}.

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeployment.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#deployment_id DataDatabricksApp#deployment_id}.

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeployment.property.envVars"></a>

```java
public IResolvable|java.util.List<DataDatabricksAppAppPendingDeploymentEnvVars> getEnvVars();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVars">DataDatabricksAppAppPendingDeploymentEnvVars</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#env_vars DataDatabricksApp#env_vars}.

---

##### `gitSource`<sup>Optional</sup> <a name="gitSource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeployment.property.gitSource"></a>

```java
public DataDatabricksAppAppPendingDeploymentGitSource getGitSource();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSource">DataDatabricksAppAppPendingDeploymentGitSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#git_source DataDatabricksApp#git_source}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeployment.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#mode DataDatabricksApp#mode}.

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeployment.property.sourceCodePath"></a>

```java
public java.lang.String getSourceCodePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#source_code_path DataDatabricksApp#source_code_path}.

---

### DataDatabricksAppAppPendingDeploymentDeploymentArtifacts <a name="DataDatabricksAppAppPendingDeploymentDeploymentArtifacts" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifacts.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppPendingDeploymentDeploymentArtifacts;

DataDatabricksAppAppPendingDeploymentDeploymentArtifacts.builder()
//  .sourceCodePath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifacts.property.sourceCodePath">sourceCodePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#source_code_path DataDatabricksApp#source_code_path}. |

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifacts.property.sourceCodePath"></a>

```java
public java.lang.String getSourceCodePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#source_code_path DataDatabricksApp#source_code_path}.

---

### DataDatabricksAppAppPendingDeploymentEnvVars <a name="DataDatabricksAppAppPendingDeploymentEnvVars" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVars"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVars.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppPendingDeploymentEnvVars;

DataDatabricksAppAppPendingDeploymentEnvVars.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
//  .valueFrom(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVars.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVars.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#value DataDatabricksApp#value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVars.property.valueFrom">valueFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#value_from DataDatabricksApp#value_from}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVars.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVars.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#value DataDatabricksApp#value}.

---

##### `valueFrom`<sup>Optional</sup> <a name="valueFrom" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVars.property.valueFrom"></a>

```java
public java.lang.String getValueFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#value_from DataDatabricksApp#value_from}.

---

### DataDatabricksAppAppPendingDeploymentGitSource <a name="DataDatabricksAppAppPendingDeploymentGitSource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSource.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppPendingDeploymentGitSource;

DataDatabricksAppAppPendingDeploymentGitSource.builder()
//  .branch(java.lang.String)
//  .commit(java.lang.String)
//  .sourceCodePath(java.lang.String)
//  .tag(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSource.property.branch">branch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#branch DataDatabricksApp#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSource.property.commit">commit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#commit DataDatabricksApp#commit}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSource.property.sourceCodePath">sourceCodePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#source_code_path DataDatabricksApp#source_code_path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSource.property.tag">tag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#tag DataDatabricksApp#tag}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSource.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#branch DataDatabricksApp#branch}.

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSource.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#commit DataDatabricksApp#commit}.

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSource.property.sourceCodePath"></a>

```java
public java.lang.String getSourceCodePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#source_code_path DataDatabricksApp#source_code_path}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSource.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#tag DataDatabricksApp#tag}.

---

### DataDatabricksAppAppPendingDeploymentGitSourceGitRepository <a name="DataDatabricksAppAppPendingDeploymentGitSourceGitRepository" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepository.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppPendingDeploymentGitSourceGitRepository;

DataDatabricksAppAppPendingDeploymentGitSourceGitRepository.builder()
    .provider(java.lang.String)
    .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepository.property.provider">provider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#provider DataDatabricksApp#provider}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepository.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#url DataDatabricksApp#url}. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepository.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#provider DataDatabricksApp#provider}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepository.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#url DataDatabricksApp#url}.

---

### DataDatabricksAppAppPendingDeploymentStatus <a name="DataDatabricksAppAppPendingDeploymentStatus" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppPendingDeploymentStatus;

DataDatabricksAppAppPendingDeploymentStatus.builder()
    .build();
```


### DataDatabricksAppAppResources <a name="DataDatabricksAppAppResources" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResources;

DataDatabricksAppAppResources.builder()
    .name(java.lang.String)
//  .app(DataDatabricksAppAppResourcesApp)
//  .database(DataDatabricksAppAppResourcesDatabase)
//  .description(java.lang.String)
//  .experiment(DataDatabricksAppAppResourcesExperiment)
//  .genieSpace(DataDatabricksAppAppResourcesGenieSpace)
//  .job(DataDatabricksAppAppResourcesJob)
//  .postgres(DataDatabricksAppAppResourcesPostgres)
//  .secret(DataDatabricksAppAppResourcesSecret)
//  .servingEndpoint(DataDatabricksAppAppResourcesServingEndpoint)
//  .sqlWarehouse(DataDatabricksAppAppResourcesSqlWarehouse)
//  .ucSecurable(DataDatabricksAppAppResourcesUcSecurable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesApp">DataDatabricksAppAppResourcesApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#app DataDatabricksApp#app}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.database">database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabase">DataDatabricksAppAppResourcesDatabase</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#database DataDatabricksApp#database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#description DataDatabricksApp#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.experiment">experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperiment">DataDatabricksAppAppResourcesExperiment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#experiment DataDatabricksApp#experiment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.genieSpace">genieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpace">DataDatabricksAppAppResourcesGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#genie_space DataDatabricksApp#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.job">job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJob">DataDatabricksAppAppResourcesJob</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#job DataDatabricksApp#job}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.postgres">postgres</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgres">DataDatabricksAppAppResourcesPostgres</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#postgres DataDatabricksApp#postgres}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecret">DataDatabricksAppAppResourcesSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#secret DataDatabricksApp#secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.servingEndpoint">servingEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpoint">DataDatabricksAppAppResourcesServingEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#serving_endpoint DataDatabricksApp#serving_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.sqlWarehouse">sqlWarehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouse">DataDatabricksAppAppResourcesSqlWarehouse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#sql_warehouse DataDatabricksApp#sql_warehouse}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.ucSecurable">ucSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurable">DataDatabricksAppAppResourcesUcSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#uc_securable DataDatabricksApp#uc_securable}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}.

---

##### `app`<sup>Optional</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.app"></a>

```java
public DataDatabricksAppAppResourcesApp getApp();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesApp">DataDatabricksAppAppResourcesApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#app DataDatabricksApp#app}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.database"></a>

```java
public DataDatabricksAppAppResourcesDatabase getDatabase();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabase">DataDatabricksAppAppResourcesDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#database DataDatabricksApp#database}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#description DataDatabricksApp#description}.

---

##### `experiment`<sup>Optional</sup> <a name="experiment" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.experiment"></a>

```java
public DataDatabricksAppAppResourcesExperiment getExperiment();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperiment">DataDatabricksAppAppResourcesExperiment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#experiment DataDatabricksApp#experiment}.

---

##### `genieSpace`<sup>Optional</sup> <a name="genieSpace" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.genieSpace"></a>

```java
public DataDatabricksAppAppResourcesGenieSpace getGenieSpace();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpace">DataDatabricksAppAppResourcesGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#genie_space DataDatabricksApp#genie_space}.

---

##### `job`<sup>Optional</sup> <a name="job" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.job"></a>

```java
public DataDatabricksAppAppResourcesJob getJob();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJob">DataDatabricksAppAppResourcesJob</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#job DataDatabricksApp#job}.

---

##### `postgres`<sup>Optional</sup> <a name="postgres" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.postgres"></a>

```java
public DataDatabricksAppAppResourcesPostgres getPostgres();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgres">DataDatabricksAppAppResourcesPostgres</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#postgres DataDatabricksApp#postgres}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.secret"></a>

```java
public DataDatabricksAppAppResourcesSecret getSecret();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecret">DataDatabricksAppAppResourcesSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#secret DataDatabricksApp#secret}.

---

##### `servingEndpoint`<sup>Optional</sup> <a name="servingEndpoint" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.servingEndpoint"></a>

```java
public DataDatabricksAppAppResourcesServingEndpoint getServingEndpoint();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpoint">DataDatabricksAppAppResourcesServingEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#serving_endpoint DataDatabricksApp#serving_endpoint}.

---

##### `sqlWarehouse`<sup>Optional</sup> <a name="sqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.sqlWarehouse"></a>

```java
public DataDatabricksAppAppResourcesSqlWarehouse getSqlWarehouse();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouse">DataDatabricksAppAppResourcesSqlWarehouse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#sql_warehouse DataDatabricksApp#sql_warehouse}.

---

##### `ucSecurable`<sup>Optional</sup> <a name="ucSecurable" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources.property.ucSecurable"></a>

```java
public DataDatabricksAppAppResourcesUcSecurable getUcSecurable();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurable">DataDatabricksAppAppResourcesUcSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#uc_securable DataDatabricksApp#uc_securable}.

---

### DataDatabricksAppAppResourcesApp <a name="DataDatabricksAppAppResourcesApp" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesApp.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesApp;

DataDatabricksAppAppResourcesApp.builder()
//  .name(java.lang.String)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesApp.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesApp.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesApp.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}.

---

### DataDatabricksAppAppResourcesDatabase <a name="DataDatabricksAppAppResourcesDatabase" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabase.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesDatabase;

DataDatabricksAppAppResourcesDatabase.builder()
    .databaseName(java.lang.String)
    .instanceName(java.lang.String)
    .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabase.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#database_name DataDatabricksApp#database_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabase.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#instance_name DataDatabricksApp#instance_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabase.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabase.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#database_name DataDatabricksApp#database_name}.

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabase.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#instance_name DataDatabricksApp#instance_name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabase.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}.

---

### DataDatabricksAppAppResourcesExperiment <a name="DataDatabricksAppAppResourcesExperiment" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperiment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperiment.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesExperiment;

DataDatabricksAppAppResourcesExperiment.builder()
    .experimentId(java.lang.String)
    .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperiment.property.experimentId">experimentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#experiment_id DataDatabricksApp#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperiment.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}. |

---

##### `experimentId`<sup>Required</sup> <a name="experimentId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperiment.property.experimentId"></a>

```java
public java.lang.String getExperimentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#experiment_id DataDatabricksApp#experiment_id}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperiment.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}.

---

### DataDatabricksAppAppResourcesGenieSpace <a name="DataDatabricksAppAppResourcesGenieSpace" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpace.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesGenieSpace;

DataDatabricksAppAppResourcesGenieSpace.builder()
    .name(java.lang.String)
    .permission(java.lang.String)
    .spaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpace.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpace.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpace.property.spaceId">spaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#space_id DataDatabricksApp#space_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpace.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}.

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpace.property.spaceId"></a>

```java
public java.lang.String getSpaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#space_id DataDatabricksApp#space_id}.

---

### DataDatabricksAppAppResourcesJob <a name="DataDatabricksAppAppResourcesJob" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJob.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesJob;

DataDatabricksAppAppResourcesJob.builder()
    .id(java.lang.String)
    .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJob.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#id DataDatabricksApp#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJob.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#id DataDatabricksApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJob.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}.

---

### DataDatabricksAppAppResourcesPostgres <a name="DataDatabricksAppAppResourcesPostgres" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgres"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgres.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesPostgres;

DataDatabricksAppAppResourcesPostgres.builder()
//  .branch(java.lang.String)
//  .database(java.lang.String)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgres.property.branch">branch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#branch DataDatabricksApp#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgres.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#database DataDatabricksApp#database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgres.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgres.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#branch DataDatabricksApp#branch}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgres.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#database DataDatabricksApp#database}.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgres.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}.

---

### DataDatabricksAppAppResourcesSecret <a name="DataDatabricksAppAppResourcesSecret" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecret.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesSecret;

DataDatabricksAppAppResourcesSecret.builder()
    .key(java.lang.String)
    .permission(java.lang.String)
    .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecret.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#key DataDatabricksApp#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecret.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecret.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#scope DataDatabricksApp#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecret.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#key DataDatabricksApp#key}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecret.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecret.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#scope DataDatabricksApp#scope}.

---

### DataDatabricksAppAppResourcesServingEndpoint <a name="DataDatabricksAppAppResourcesServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpoint.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesServingEndpoint;

DataDatabricksAppAppResourcesServingEndpoint.builder()
    .name(java.lang.String)
    .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpoint.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpoint.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}.

---

### DataDatabricksAppAppResourcesSqlWarehouse <a name="DataDatabricksAppAppResourcesSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouse.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesSqlWarehouse;

DataDatabricksAppAppResourcesSqlWarehouse.builder()
    .id(java.lang.String)
    .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouse.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#id DataDatabricksApp#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouse.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouse.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#id DataDatabricksApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouse.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}.

---

### DataDatabricksAppAppResourcesUcSecurable <a name="DataDatabricksAppAppResourcesUcSecurable" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurable.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesUcSecurable;

DataDatabricksAppAppResourcesUcSecurable.builder()
    .permission(java.lang.String)
    .securableFullName(java.lang.String)
    .securableType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurable.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurable.property.securableFullName">securableFullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#securable_full_name DataDatabricksApp#securable_full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurable.property.securableType">securableType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#securable_type DataDatabricksApp#securable_type}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurable.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#permission DataDatabricksApp#permission}.

---

##### `securableFullName`<sup>Required</sup> <a name="securableFullName" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurable.property.securableFullName"></a>

```java
public java.lang.String getSecurableFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#securable_full_name DataDatabricksApp#securable_full_name}.

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurable.property.securableType"></a>

```java
public java.lang.String getSecurableType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#securable_type DataDatabricksApp#securable_type}.

---

### DataDatabricksAppAppTelemetryExportDestinations <a name="DataDatabricksAppAppTelemetryExportDestinations" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinations.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppTelemetryExportDestinations;

DataDatabricksAppAppTelemetryExportDestinations.builder()
//  .unityCatalog(DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinations.property.unityCatalog">unityCatalog</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#unity_catalog DataDatabricksApp#unity_catalog}. |

---

##### `unityCatalog`<sup>Optional</sup> <a name="unityCatalog" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinations.property.unityCatalog"></a>

```java
public DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog getUnityCatalog();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#unity_catalog DataDatabricksApp#unity_catalog}.

---

### DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog <a name="DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog;

DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog.builder()
    .logsTable(java.lang.String)
    .metricsTable(java.lang.String)
    .tracesTable(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog.property.logsTable">logsTable</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#logs_table DataDatabricksApp#logs_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog.property.metricsTable">metricsTable</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#metrics_table DataDatabricksApp#metrics_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog.property.tracesTable">tracesTable</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#traces_table DataDatabricksApp#traces_table}. |

---

##### `logsTable`<sup>Required</sup> <a name="logsTable" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog.property.logsTable"></a>

```java
public java.lang.String getLogsTable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#logs_table DataDatabricksApp#logs_table}.

---

##### `metricsTable`<sup>Required</sup> <a name="metricsTable" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog.property.metricsTable"></a>

```java
public java.lang.String getMetricsTable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#metrics_table DataDatabricksApp#metrics_table}.

---

##### `tracesTable`<sup>Required</sup> <a name="tracesTable" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog.property.tracesTable"></a>

```java
public java.lang.String getTracesTable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#traces_table DataDatabricksApp#traces_table}.

---

### DataDatabricksAppConfig <a name="DataDatabricksAppConfig" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppConfig;

DataDatabricksAppConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .providerConfig(DataDatabricksAppProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfig">DataDatabricksAppProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#provider_config DataDatabricksApp#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#name DataDatabricksApp#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppConfig.property.providerConfig"></a>

```java
public DataDatabricksAppProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfig">DataDatabricksAppProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#provider_config DataDatabricksApp#provider_config}.

---

### DataDatabricksAppProviderConfig <a name="DataDatabricksAppProviderConfig" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppProviderConfig;

DataDatabricksAppProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#workspace_id DataDatabricksApp#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/app#workspace_id DataDatabricksApp#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference <a name="DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference;

new DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath"></a>

```java
public void resetSourceCodePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifacts">DataDatabricksAppAppActiveDeploymentDeploymentArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput"></a>

```java
public java.lang.String getSourceCodePathInput();
```

- *Type:* java.lang.String

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath"></a>

```java
public java.lang.String getSourceCodePath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference.property.internalValue"></a>

```java
public DataDatabricksAppAppActiveDeploymentDeploymentArtifacts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifacts">DataDatabricksAppAppActiveDeploymentDeploymentArtifacts</a>

---


### DataDatabricksAppAppActiveDeploymentEnvVarsList <a name="DataDatabricksAppAppActiveDeploymentEnvVarsList" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppActiveDeploymentEnvVarsList;

new DataDatabricksAppAppActiveDeploymentEnvVarsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.get"></a>

```java
public DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVars">DataDatabricksAppAppActiveDeploymentEnvVars</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksAppAppActiveDeploymentEnvVars> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVars">DataDatabricksAppAppActiveDeploymentEnvVars</a>>

---


### DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference <a name="DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference;

new DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.resetValueFrom">resetValueFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetValueFrom` <a name="resetValueFrom" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.resetValueFrom"></a>

```java
public void resetValueFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.valueFromInput">valueFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.valueFrom">valueFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVars">DataDatabricksAppAppActiveDeploymentEnvVars</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueFromInput`<sup>Optional</sup> <a name="valueFromInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.valueFromInput"></a>

```java
public java.lang.String getValueFromInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.valueFrom"></a>

```java
public java.lang.String getValueFrom();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppActiveDeploymentEnvVars getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVars">DataDatabricksAppAppActiveDeploymentEnvVars</a>

---


### DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference <a name="DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference;

new DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.providerInput">providerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.provider">provider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepository">DataDatabricksAppAppActiveDeploymentGitSourceGitRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.providerInput"></a>

```java
public java.lang.String getProviderInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference.property.internalValue"></a>

```java
public DataDatabricksAppAppActiveDeploymentGitSourceGitRepository getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepository">DataDatabricksAppAppActiveDeploymentGitSourceGitRepository</a>

---


### DataDatabricksAppAppActiveDeploymentGitSourceOutputReference <a name="DataDatabricksAppAppActiveDeploymentGitSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference;

new DataDatabricksAppAppActiveDeploymentGitSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.resetCommit">resetCommit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetCommit` <a name="resetCommit" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.resetCommit"></a>

```java
public void resetCommit()
```

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.resetSourceCodePath"></a>

```java
public void resetSourceCodePath()
```

##### `resetTag` <a name="resetTag" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.resetTag"></a>

```java
public void resetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference">DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.resolvedCommit">resolvedCommit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.commitInput">commitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.tagInput">tagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.commit">commit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSource">DataDatabricksAppAppActiveDeploymentGitSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.gitRepository"></a>

```java
public DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference getGitRepository();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference">DataDatabricksAppAppActiveDeploymentGitSourceGitRepositoryOutputReference</a>

---

##### `resolvedCommit`<sup>Required</sup> <a name="resolvedCommit" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.resolvedCommit"></a>

```java
public java.lang.String getResolvedCommit();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.commitInput"></a>

```java
public java.lang.String getCommitInput();
```

- *Type:* java.lang.String

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.sourceCodePathInput"></a>

```java
public java.lang.String getSourceCodePathInput();
```

- *Type:* java.lang.String

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.tagInput"></a>

```java
public java.lang.String getTagInput();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.sourceCodePath"></a>

```java
public java.lang.String getSourceCodePath();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppActiveDeploymentGitSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSource">DataDatabricksAppAppActiveDeploymentGitSource</a>

---


### DataDatabricksAppAppActiveDeploymentOutputReference <a name="DataDatabricksAppAppActiveDeploymentOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppActiveDeploymentOutputReference;

new DataDatabricksAppAppActiveDeploymentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.putEnvVars">putEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.putGitSource">putGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.resetEnvVars">resetEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.resetGitSource">resetGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvVars` <a name="putEnvVars" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.putEnvVars"></a>

```java
public void putEnvVars(IResolvable|java.util.List<DataDatabricksAppAppActiveDeploymentEnvVars> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.putEnvVars.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVars">DataDatabricksAppAppActiveDeploymentEnvVars</a>>

---

##### `putGitSource` <a name="putGitSource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.putGitSource"></a>

```java
public void putGitSource(DataDatabricksAppAppActiveDeploymentGitSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.putGitSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSource">DataDatabricksAppAppActiveDeploymentGitSource</a>

---

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetDeploymentId` <a name="resetDeploymentId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.resetDeploymentId"></a>

```java
public void resetDeploymentId()
```

##### `resetEnvVars` <a name="resetEnvVars" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.resetEnvVars"></a>

```java
public void resetEnvVars()
```

##### `resetGitSource` <a name="resetGitSource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.resetGitSource"></a>

```java
public void resetGitSource()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.resetSourceCodePath"></a>

```java
public void resetSourceCodePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.creator">creator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.deploymentArtifacts">deploymentArtifacts</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.envVars">envVars</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList">DataDatabricksAppAppActiveDeploymentEnvVarsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference">DataDatabricksAppAppActiveDeploymentGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference">DataDatabricksAppAppActiveDeploymentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.deploymentIdInput">deploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.envVarsInput">envVarsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVars">DataDatabricksAppAppActiveDeploymentEnvVars</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.gitSourceInput">gitSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSource">DataDatabricksAppAppActiveDeploymentGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeployment">DataDatabricksAppAppActiveDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.creator"></a>

```java
public java.lang.String getCreator();
```

- *Type:* java.lang.String

---

##### `deploymentArtifacts`<sup>Required</sup> <a name="deploymentArtifacts" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.deploymentArtifacts"></a>

```java
public DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference getDeploymentArtifacts();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppAppActiveDeploymentDeploymentArtifactsOutputReference</a>

---

##### `envVars`<sup>Required</sup> <a name="envVars" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.envVars"></a>

```java
public DataDatabricksAppAppActiveDeploymentEnvVarsList getEnvVars();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVarsList">DataDatabricksAppAppActiveDeploymentEnvVarsList</a>

---

##### `gitSource`<sup>Required</sup> <a name="gitSource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.gitSource"></a>

```java
public DataDatabricksAppAppActiveDeploymentGitSourceOutputReference getGitSource();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSourceOutputReference">DataDatabricksAppAppActiveDeploymentGitSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.status"></a>

```java
public DataDatabricksAppAppActiveDeploymentStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference">DataDatabricksAppAppActiveDeploymentStatusOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.deploymentIdInput"></a>

```java
public java.lang.String getDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `envVarsInput`<sup>Optional</sup> <a name="envVarsInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.envVarsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksAppAppActiveDeploymentEnvVars> getEnvVarsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentEnvVars">DataDatabricksAppAppActiveDeploymentEnvVars</a>>

---

##### `gitSourceInput`<sup>Optional</sup> <a name="gitSourceInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.gitSourceInput"></a>

```java
public IResolvable|DataDatabricksAppAppActiveDeploymentGitSource getGitSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentGitSource">DataDatabricksAppAppActiveDeploymentGitSource</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.sourceCodePathInput"></a>

```java
public java.lang.String getSourceCodePathInput();
```

- *Type:* java.lang.String

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.sourceCodePath"></a>

```java
public java.lang.String getSourceCodePath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference.property.internalValue"></a>

```java
public DataDatabricksAppAppActiveDeployment getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeployment">DataDatabricksAppAppActiveDeployment</a>

---


### DataDatabricksAppAppActiveDeploymentStatusOutputReference <a name="DataDatabricksAppAppActiveDeploymentStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppActiveDeploymentStatusOutputReference;

new DataDatabricksAppAppActiveDeploymentStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatus">DataDatabricksAppAppActiveDeploymentStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatusOutputReference.property.internalValue"></a>

```java
public DataDatabricksAppAppActiveDeploymentStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentStatus">DataDatabricksAppAppActiveDeploymentStatus</a>

---


### DataDatabricksAppAppAppStatusOutputReference <a name="DataDatabricksAppAppAppStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppAppStatusOutputReference;

new DataDatabricksAppAppAppStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.property.runningInstances">runningInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatus">DataDatabricksAppAppAppStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `runningInstances`<sup>Required</sup> <a name="runningInstances" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.property.runningInstances"></a>

```java
public java.lang.Number getRunningInstances();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference.property.internalValue"></a>

```java
public DataDatabricksAppAppAppStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatus">DataDatabricksAppAppAppStatus</a>

---


### DataDatabricksAppAppComputeStatusOutputReference <a name="DataDatabricksAppAppComputeStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppComputeStatusOutputReference;

new DataDatabricksAppAppComputeStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.property.activeInstances">activeInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatus">DataDatabricksAppAppComputeStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeInstances`<sup>Required</sup> <a name="activeInstances" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.property.activeInstances"></a>

```java
public java.lang.Number getActiveInstances();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference.property.internalValue"></a>

```java
public DataDatabricksAppAppComputeStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatus">DataDatabricksAppAppComputeStatus</a>

---


### DataDatabricksAppAppGitRepositoryOutputReference <a name="DataDatabricksAppAppGitRepositoryOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppGitRepositoryOutputReference;

new DataDatabricksAppAppGitRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.property.providerInput">providerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.property.provider">provider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepository">DataDatabricksAppAppGitRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.property.providerInput"></a>

```java
public java.lang.String getProviderInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppGitRepository getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepository">DataDatabricksAppAppGitRepository</a>

---


### DataDatabricksAppAppOutputReference <a name="DataDatabricksAppAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppOutputReference;

new DataDatabricksAppAppOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.putGitRepository">putGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.putTelemetryExportDestinations">putTelemetryExportDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetBudgetPolicyId">resetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetComputeMaxInstances">resetComputeMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetComputeMinInstances">resetComputeMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetComputeSize">resetComputeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetGitRepository">resetGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetSpace">resetSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetTelemetryExportDestinations">resetTelemetryExportDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetUsagePolicyId">resetUsagePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetUserApiScopes">resetUserApiScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGitRepository` <a name="putGitRepository" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.putGitRepository"></a>

```java
public void putGitRepository(DataDatabricksAppAppGitRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.putGitRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepository">DataDatabricksAppAppGitRepository</a>

---

##### `putResources` <a name="putResources" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.putResources"></a>

```java
public void putResources(IResolvable|java.util.List<DataDatabricksAppAppResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.putResources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources">DataDatabricksAppAppResources</a>>

---

##### `putTelemetryExportDestinations` <a name="putTelemetryExportDestinations" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.putTelemetryExportDestinations"></a>

```java
public void putTelemetryExportDestinations(IResolvable|java.util.List<DataDatabricksAppAppTelemetryExportDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.putTelemetryExportDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinations">DataDatabricksAppAppTelemetryExportDestinations</a>>

---

##### `resetBudgetPolicyId` <a name="resetBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetBudgetPolicyId"></a>

```java
public void resetBudgetPolicyId()
```

##### `resetComputeMaxInstances` <a name="resetComputeMaxInstances" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetComputeMaxInstances"></a>

```java
public void resetComputeMaxInstances()
```

##### `resetComputeMinInstances` <a name="resetComputeMinInstances" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetComputeMinInstances"></a>

```java
public void resetComputeMinInstances()
```

##### `resetComputeSize` <a name="resetComputeSize" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetComputeSize"></a>

```java
public void resetComputeSize()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGitRepository` <a name="resetGitRepository" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetGitRepository"></a>

```java
public void resetGitRepository()
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetSpace` <a name="resetSpace" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetSpace"></a>

```java
public void resetSpace()
```

##### `resetTelemetryExportDestinations` <a name="resetTelemetryExportDestinations" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetTelemetryExportDestinations"></a>

```java
public void resetTelemetryExportDestinations()
```

##### `resetUsagePolicyId` <a name="resetUsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetUsagePolicyId"></a>

```java
public void resetUsagePolicyId()
```

##### `resetUserApiScopes` <a name="resetUserApiScopes" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.resetUserApiScopes"></a>

```java
public void resetUserApiScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.activeDeployment">activeDeployment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference">DataDatabricksAppAppActiveDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.appStatus">appStatus</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference">DataDatabricksAppAppAppStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.computeStatus">computeStatus</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference">DataDatabricksAppAppComputeStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.creator">creator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.defaultSourceCodePath">defaultSourceCodePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.effectiveBudgetPolicyId">effectiveBudgetPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.effectiveUsagePolicyId">effectiveUsagePolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.effectiveUserApiScopes">effectiveUserApiScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference">DataDatabricksAppAppGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.oauth2AppClientId">oauth2AppClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.oauth2AppIntegrationId">oauth2AppIntegrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.pendingDeployment">pendingDeployment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference">DataDatabricksAppAppPendingDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList">DataDatabricksAppAppResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.servicePrincipalClientId">servicePrincipalClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.servicePrincipalName">servicePrincipalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.telemetryExportDestinations">telemetryExportDestinations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList">DataDatabricksAppAppTelemetryExportDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.thumbnailUrl">thumbnailUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.updater">updater</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.budgetPolicyIdInput">budgetPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.computeMaxInstancesInput">computeMaxInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.computeMinInstancesInput">computeMinInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.computeSizeInput">computeSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.gitRepositoryInput">gitRepositoryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepository">DataDatabricksAppAppGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources">DataDatabricksAppAppResources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.spaceInput">spaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.telemetryExportDestinationsInput">telemetryExportDestinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinations">DataDatabricksAppAppTelemetryExportDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.usagePolicyIdInput">usagePolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.userApiScopesInput">userApiScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.computeMaxInstances">computeMaxInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.computeMinInstances">computeMinInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.computeSize">computeSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.space">space</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.usagePolicyId">usagePolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.userApiScopes">userApiScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp">DataDatabricksAppApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeDeployment`<sup>Required</sup> <a name="activeDeployment" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.activeDeployment"></a>

```java
public DataDatabricksAppAppActiveDeploymentOutputReference getActiveDeployment();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppActiveDeploymentOutputReference">DataDatabricksAppAppActiveDeploymentOutputReference</a>

---

##### `appStatus`<sup>Required</sup> <a name="appStatus" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.appStatus"></a>

```java
public DataDatabricksAppAppAppStatusOutputReference getAppStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppAppStatusOutputReference">DataDatabricksAppAppAppStatusOutputReference</a>

---

##### `computeStatus`<sup>Required</sup> <a name="computeStatus" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.computeStatus"></a>

```java
public DataDatabricksAppAppComputeStatusOutputReference getComputeStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppComputeStatusOutputReference">DataDatabricksAppAppComputeStatusOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.creator"></a>

```java
public java.lang.String getCreator();
```

- *Type:* java.lang.String

---

##### `defaultSourceCodePath`<sup>Required</sup> <a name="defaultSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.defaultSourceCodePath"></a>

```java
public java.lang.String getDefaultSourceCodePath();
```

- *Type:* java.lang.String

---

##### `effectiveBudgetPolicyId`<sup>Required</sup> <a name="effectiveBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.effectiveBudgetPolicyId"></a>

```java
public java.lang.String getEffectiveBudgetPolicyId();
```

- *Type:* java.lang.String

---

##### `effectiveUsagePolicyId`<sup>Required</sup> <a name="effectiveUsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.effectiveUsagePolicyId"></a>

```java
public java.lang.String getEffectiveUsagePolicyId();
```

- *Type:* java.lang.String

---

##### `effectiveUserApiScopes`<sup>Required</sup> <a name="effectiveUserApiScopes" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.effectiveUserApiScopes"></a>

```java
public java.util.List<java.lang.String> getEffectiveUserApiScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.gitRepository"></a>

```java
public DataDatabricksAppAppGitRepositoryOutputReference getGitRepository();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepositoryOutputReference">DataDatabricksAppAppGitRepositoryOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `oauth2AppClientId`<sup>Required</sup> <a name="oauth2AppClientId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.oauth2AppClientId"></a>

```java
public java.lang.String getOauth2AppClientId();
```

- *Type:* java.lang.String

---

##### `oauth2AppIntegrationId`<sup>Required</sup> <a name="oauth2AppIntegrationId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.oauth2AppIntegrationId"></a>

```java
public java.lang.String getOauth2AppIntegrationId();
```

- *Type:* java.lang.String

---

##### `pendingDeployment`<sup>Required</sup> <a name="pendingDeployment" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.pendingDeployment"></a>

```java
public DataDatabricksAppAppPendingDeploymentOutputReference getPendingDeployment();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference">DataDatabricksAppAppPendingDeploymentOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.resources"></a>

```java
public DataDatabricksAppAppResourcesList getResources();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList">DataDatabricksAppAppResourcesList</a>

---

##### `servicePrincipalClientId`<sup>Required</sup> <a name="servicePrincipalClientId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.servicePrincipalClientId"></a>

```java
public java.lang.String getServicePrincipalClientId();
```

- *Type:* java.lang.String

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.servicePrincipalId"></a>

```java
public java.lang.Number getServicePrincipalId();
```

- *Type:* java.lang.Number

---

##### `servicePrincipalName`<sup>Required</sup> <a name="servicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.servicePrincipalName"></a>

```java
public java.lang.String getServicePrincipalName();
```

- *Type:* java.lang.String

---

##### `telemetryExportDestinations`<sup>Required</sup> <a name="telemetryExportDestinations" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.telemetryExportDestinations"></a>

```java
public DataDatabricksAppAppTelemetryExportDestinationsList getTelemetryExportDestinations();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList">DataDatabricksAppAppTelemetryExportDestinationsList</a>

---

##### `thumbnailUrl`<sup>Required</sup> <a name="thumbnailUrl" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.thumbnailUrl"></a>

```java
public java.lang.String getThumbnailUrl();
```

- *Type:* java.lang.String

---

##### `updater`<sup>Required</sup> <a name="updater" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.updater"></a>

```java
public java.lang.String getUpdater();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `budgetPolicyIdInput`<sup>Optional</sup> <a name="budgetPolicyIdInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.budgetPolicyIdInput"></a>

```java
public java.lang.String getBudgetPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `computeMaxInstancesInput`<sup>Optional</sup> <a name="computeMaxInstancesInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.computeMaxInstancesInput"></a>

```java
public java.lang.Number getComputeMaxInstancesInput();
```

- *Type:* java.lang.Number

---

##### `computeMinInstancesInput`<sup>Optional</sup> <a name="computeMinInstancesInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.computeMinInstancesInput"></a>

```java
public java.lang.Number getComputeMinInstancesInput();
```

- *Type:* java.lang.Number

---

##### `computeSizeInput`<sup>Optional</sup> <a name="computeSizeInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.computeSizeInput"></a>

```java
public java.lang.String getComputeSizeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `gitRepositoryInput`<sup>Optional</sup> <a name="gitRepositoryInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.gitRepositoryInput"></a>

```java
public IResolvable|DataDatabricksAppAppGitRepository getGitRepositoryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppGitRepository">DataDatabricksAppAppGitRepository</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.resourcesInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksAppAppResources> getResourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources">DataDatabricksAppAppResources</a>>

---

##### `spaceInput`<sup>Optional</sup> <a name="spaceInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.spaceInput"></a>

```java
public java.lang.String getSpaceInput();
```

- *Type:* java.lang.String

---

##### `telemetryExportDestinationsInput`<sup>Optional</sup> <a name="telemetryExportDestinationsInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.telemetryExportDestinationsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksAppAppTelemetryExportDestinations> getTelemetryExportDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinations">DataDatabricksAppAppTelemetryExportDestinations</a>>

---

##### `usagePolicyIdInput`<sup>Optional</sup> <a name="usagePolicyIdInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.usagePolicyIdInput"></a>

```java
public java.lang.String getUsagePolicyIdInput();
```

- *Type:* java.lang.String

---

##### `userApiScopesInput`<sup>Optional</sup> <a name="userApiScopesInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.userApiScopesInput"></a>

```java
public java.util.List<java.lang.String> getUserApiScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.budgetPolicyId"></a>

```java
public java.lang.String getBudgetPolicyId();
```

- *Type:* java.lang.String

---

##### `computeMaxInstances`<sup>Required</sup> <a name="computeMaxInstances" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.computeMaxInstances"></a>

```java
public java.lang.Number getComputeMaxInstances();
```

- *Type:* java.lang.Number

---

##### `computeMinInstances`<sup>Required</sup> <a name="computeMinInstances" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.computeMinInstances"></a>

```java
public java.lang.Number getComputeMinInstances();
```

- *Type:* java.lang.Number

---

##### `computeSize`<sup>Required</sup> <a name="computeSize" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.computeSize"></a>

```java
public java.lang.String getComputeSize();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.space"></a>

```java
public java.lang.String getSpace();
```

- *Type:* java.lang.String

---

##### `usagePolicyId`<sup>Required</sup> <a name="usagePolicyId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.usagePolicyId"></a>

```java
public java.lang.String getUsagePolicyId();
```

- *Type:* java.lang.String

---

##### `userApiScopes`<sup>Required</sup> <a name="userApiScopes" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.userApiScopes"></a>

```java
public java.util.List<java.lang.String> getUserApiScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppOutputReference.property.internalValue"></a>

```java
public DataDatabricksAppApp getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppApp">DataDatabricksAppApp</a>

---


### DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference <a name="DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference;

new DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath"></a>

```java
public void resetSourceCodePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifacts">DataDatabricksAppAppPendingDeploymentDeploymentArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput"></a>

```java
public java.lang.String getSourceCodePathInput();
```

- *Type:* java.lang.String

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath"></a>

```java
public java.lang.String getSourceCodePath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference.property.internalValue"></a>

```java
public DataDatabricksAppAppPendingDeploymentDeploymentArtifacts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifacts">DataDatabricksAppAppPendingDeploymentDeploymentArtifacts</a>

---


### DataDatabricksAppAppPendingDeploymentEnvVarsList <a name="DataDatabricksAppAppPendingDeploymentEnvVarsList" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppPendingDeploymentEnvVarsList;

new DataDatabricksAppAppPendingDeploymentEnvVarsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.get"></a>

```java
public DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVars">DataDatabricksAppAppPendingDeploymentEnvVars</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksAppAppPendingDeploymentEnvVars> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVars">DataDatabricksAppAppPendingDeploymentEnvVars</a>>

---


### DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference <a name="DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference;

new DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.resetValueFrom">resetValueFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetValueFrom` <a name="resetValueFrom" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.resetValueFrom"></a>

```java
public void resetValueFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.valueFromInput">valueFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.valueFrom">valueFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVars">DataDatabricksAppAppPendingDeploymentEnvVars</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueFromInput`<sup>Optional</sup> <a name="valueFromInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.valueFromInput"></a>

```java
public java.lang.String getValueFromInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.valueFrom"></a>

```java
public java.lang.String getValueFrom();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppPendingDeploymentEnvVars getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVars">DataDatabricksAppAppPendingDeploymentEnvVars</a>

---


### DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference <a name="DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference;

new DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.providerInput">providerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.provider">provider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepository">DataDatabricksAppAppPendingDeploymentGitSourceGitRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.providerInput"></a>

```java
public java.lang.String getProviderInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference.property.internalValue"></a>

```java
public DataDatabricksAppAppPendingDeploymentGitSourceGitRepository getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepository">DataDatabricksAppAppPendingDeploymentGitSourceGitRepository</a>

---


### DataDatabricksAppAppPendingDeploymentGitSourceOutputReference <a name="DataDatabricksAppAppPendingDeploymentGitSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference;

new DataDatabricksAppAppPendingDeploymentGitSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.resetCommit">resetCommit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetCommit` <a name="resetCommit" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.resetCommit"></a>

```java
public void resetCommit()
```

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.resetSourceCodePath"></a>

```java
public void resetSourceCodePath()
```

##### `resetTag` <a name="resetTag" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.resetTag"></a>

```java
public void resetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference">DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.resolvedCommit">resolvedCommit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.commitInput">commitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.tagInput">tagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.commit">commit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSource">DataDatabricksAppAppPendingDeploymentGitSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.gitRepository"></a>

```java
public DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference getGitRepository();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference">DataDatabricksAppAppPendingDeploymentGitSourceGitRepositoryOutputReference</a>

---

##### `resolvedCommit`<sup>Required</sup> <a name="resolvedCommit" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.resolvedCommit"></a>

```java
public java.lang.String getResolvedCommit();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.commitInput"></a>

```java
public java.lang.String getCommitInput();
```

- *Type:* java.lang.String

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.sourceCodePathInput"></a>

```java
public java.lang.String getSourceCodePathInput();
```

- *Type:* java.lang.String

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.tagInput"></a>

```java
public java.lang.String getTagInput();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.sourceCodePath"></a>

```java
public java.lang.String getSourceCodePath();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppPendingDeploymentGitSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSource">DataDatabricksAppAppPendingDeploymentGitSource</a>

---


### DataDatabricksAppAppPendingDeploymentOutputReference <a name="DataDatabricksAppAppPendingDeploymentOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppPendingDeploymentOutputReference;

new DataDatabricksAppAppPendingDeploymentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.putEnvVars">putEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.putGitSource">putGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.resetEnvVars">resetEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.resetGitSource">resetGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvVars` <a name="putEnvVars" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.putEnvVars"></a>

```java
public void putEnvVars(IResolvable|java.util.List<DataDatabricksAppAppPendingDeploymentEnvVars> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.putEnvVars.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVars">DataDatabricksAppAppPendingDeploymentEnvVars</a>>

---

##### `putGitSource` <a name="putGitSource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.putGitSource"></a>

```java
public void putGitSource(DataDatabricksAppAppPendingDeploymentGitSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.putGitSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSource">DataDatabricksAppAppPendingDeploymentGitSource</a>

---

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetDeploymentId` <a name="resetDeploymentId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.resetDeploymentId"></a>

```java
public void resetDeploymentId()
```

##### `resetEnvVars` <a name="resetEnvVars" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.resetEnvVars"></a>

```java
public void resetEnvVars()
```

##### `resetGitSource` <a name="resetGitSource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.resetGitSource"></a>

```java
public void resetGitSource()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.resetSourceCodePath"></a>

```java
public void resetSourceCodePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.creator">creator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.deploymentArtifacts">deploymentArtifacts</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.envVars">envVars</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList">DataDatabricksAppAppPendingDeploymentEnvVarsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference">DataDatabricksAppAppPendingDeploymentGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference">DataDatabricksAppAppPendingDeploymentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.deploymentIdInput">deploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.envVarsInput">envVarsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVars">DataDatabricksAppAppPendingDeploymentEnvVars</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.gitSourceInput">gitSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSource">DataDatabricksAppAppPendingDeploymentGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeployment">DataDatabricksAppAppPendingDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.creator"></a>

```java
public java.lang.String getCreator();
```

- *Type:* java.lang.String

---

##### `deploymentArtifacts`<sup>Required</sup> <a name="deploymentArtifacts" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.deploymentArtifacts"></a>

```java
public DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference getDeploymentArtifacts();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppAppPendingDeploymentDeploymentArtifactsOutputReference</a>

---

##### `envVars`<sup>Required</sup> <a name="envVars" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.envVars"></a>

```java
public DataDatabricksAppAppPendingDeploymentEnvVarsList getEnvVars();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVarsList">DataDatabricksAppAppPendingDeploymentEnvVarsList</a>

---

##### `gitSource`<sup>Required</sup> <a name="gitSource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.gitSource"></a>

```java
public DataDatabricksAppAppPendingDeploymentGitSourceOutputReference getGitSource();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSourceOutputReference">DataDatabricksAppAppPendingDeploymentGitSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.status"></a>

```java
public DataDatabricksAppAppPendingDeploymentStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference">DataDatabricksAppAppPendingDeploymentStatusOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.deploymentIdInput"></a>

```java
public java.lang.String getDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `envVarsInput`<sup>Optional</sup> <a name="envVarsInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.envVarsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksAppAppPendingDeploymentEnvVars> getEnvVarsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentEnvVars">DataDatabricksAppAppPendingDeploymentEnvVars</a>>

---

##### `gitSourceInput`<sup>Optional</sup> <a name="gitSourceInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.gitSourceInput"></a>

```java
public IResolvable|DataDatabricksAppAppPendingDeploymentGitSource getGitSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentGitSource">DataDatabricksAppAppPendingDeploymentGitSource</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.sourceCodePathInput"></a>

```java
public java.lang.String getSourceCodePathInput();
```

- *Type:* java.lang.String

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.sourceCodePath"></a>

```java
public java.lang.String getSourceCodePath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentOutputReference.property.internalValue"></a>

```java
public DataDatabricksAppAppPendingDeployment getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeployment">DataDatabricksAppAppPendingDeployment</a>

---


### DataDatabricksAppAppPendingDeploymentStatusOutputReference <a name="DataDatabricksAppAppPendingDeploymentStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppPendingDeploymentStatusOutputReference;

new DataDatabricksAppAppPendingDeploymentStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatus">DataDatabricksAppAppPendingDeploymentStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatusOutputReference.property.internalValue"></a>

```java
public DataDatabricksAppAppPendingDeploymentStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppPendingDeploymentStatus">DataDatabricksAppAppPendingDeploymentStatus</a>

---


### DataDatabricksAppAppResourcesAppOutputReference <a name="DataDatabricksAppAppResourcesAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesAppOutputReference;

new DataDatabricksAppAppResourcesAppOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesApp">DataDatabricksAppAppResourcesApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesApp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesApp">DataDatabricksAppAppResourcesApp</a>

---


### DataDatabricksAppAppResourcesDatabaseOutputReference <a name="DataDatabricksAppAppResourcesDatabaseOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesDatabaseOutputReference;

new DataDatabricksAppAppResourcesDatabaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.instanceNameInput">instanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabase">DataDatabricksAppAppResourcesDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.instanceNameInput"></a>

```java
public java.lang.String getInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesDatabase getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabase">DataDatabricksAppAppResourcesDatabase</a>

---


### DataDatabricksAppAppResourcesExperimentOutputReference <a name="DataDatabricksAppAppResourcesExperimentOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesExperimentOutputReference;

new DataDatabricksAppAppResourcesExperimentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.property.experimentIdInput">experimentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.property.experimentId">experimentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperiment">DataDatabricksAppAppResourcesExperiment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `experimentIdInput`<sup>Optional</sup> <a name="experimentIdInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.property.experimentIdInput"></a>

```java
public java.lang.String getExperimentIdInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `experimentId`<sup>Required</sup> <a name="experimentId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.property.experimentId"></a>

```java
public java.lang.String getExperimentId();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesExperiment getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperiment">DataDatabricksAppAppResourcesExperiment</a>

---


### DataDatabricksAppAppResourcesGenieSpaceOutputReference <a name="DataDatabricksAppAppResourcesGenieSpaceOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesGenieSpaceOutputReference;

new DataDatabricksAppAppResourcesGenieSpaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.spaceIdInput">spaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.spaceId">spaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpace">DataDatabricksAppAppResourcesGenieSpace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `spaceIdInput`<sup>Optional</sup> <a name="spaceIdInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.spaceIdInput"></a>

```java
public java.lang.String getSpaceIdInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.spaceId"></a>

```java
public java.lang.String getSpaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesGenieSpace getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpace">DataDatabricksAppAppResourcesGenieSpace</a>

---


### DataDatabricksAppAppResourcesJobOutputReference <a name="DataDatabricksAppAppResourcesJobOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesJobOutputReference;

new DataDatabricksAppAppResourcesJobOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJob">DataDatabricksAppAppResourcesJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesJob getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJob">DataDatabricksAppAppResourcesJob</a>

---


### DataDatabricksAppAppResourcesList <a name="DataDatabricksAppAppResourcesList" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesList;

new DataDatabricksAppAppResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.get"></a>

```java
public DataDatabricksAppAppResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources">DataDatabricksAppAppResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksAppAppResources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources">DataDatabricksAppAppResources</a>>

---


### DataDatabricksAppAppResourcesOutputReference <a name="DataDatabricksAppAppResourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesOutputReference;

new DataDatabricksAppAppResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putApp">putApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putExperiment">putExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putGenieSpace">putGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putJob">putJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putPostgres">putPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putServingEndpoint">putServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putSqlWarehouse">putSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putUcSecurable">putUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetApp">resetApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetExperiment">resetExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetGenieSpace">resetGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetJob">resetJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetPostgres">resetPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetServingEndpoint">resetServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetSqlWarehouse">resetSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetUcSecurable">resetUcSecurable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApp` <a name="putApp" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putApp"></a>

```java
public void putApp(DataDatabricksAppAppResourcesApp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putApp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesApp">DataDatabricksAppAppResourcesApp</a>

---

##### `putDatabase` <a name="putDatabase" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putDatabase"></a>

```java
public void putDatabase(DataDatabricksAppAppResourcesDatabase value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabase">DataDatabricksAppAppResourcesDatabase</a>

---

##### `putExperiment` <a name="putExperiment" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putExperiment"></a>

```java
public void putExperiment(DataDatabricksAppAppResourcesExperiment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putExperiment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperiment">DataDatabricksAppAppResourcesExperiment</a>

---

##### `putGenieSpace` <a name="putGenieSpace" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putGenieSpace"></a>

```java
public void putGenieSpace(DataDatabricksAppAppResourcesGenieSpace value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putGenieSpace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpace">DataDatabricksAppAppResourcesGenieSpace</a>

---

##### `putJob` <a name="putJob" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putJob"></a>

```java
public void putJob(DataDatabricksAppAppResourcesJob value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJob">DataDatabricksAppAppResourcesJob</a>

---

##### `putPostgres` <a name="putPostgres" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putPostgres"></a>

```java
public void putPostgres(DataDatabricksAppAppResourcesPostgres value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putPostgres.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgres">DataDatabricksAppAppResourcesPostgres</a>

---

##### `putSecret` <a name="putSecret" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putSecret"></a>

```java
public void putSecret(DataDatabricksAppAppResourcesSecret value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecret">DataDatabricksAppAppResourcesSecret</a>

---

##### `putServingEndpoint` <a name="putServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putServingEndpoint"></a>

```java
public void putServingEndpoint(DataDatabricksAppAppResourcesServingEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putServingEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpoint">DataDatabricksAppAppResourcesServingEndpoint</a>

---

##### `putSqlWarehouse` <a name="putSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putSqlWarehouse"></a>

```java
public void putSqlWarehouse(DataDatabricksAppAppResourcesSqlWarehouse value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putSqlWarehouse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouse">DataDatabricksAppAppResourcesSqlWarehouse</a>

---

##### `putUcSecurable` <a name="putUcSecurable" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putUcSecurable"></a>

```java
public void putUcSecurable(DataDatabricksAppAppResourcesUcSecurable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.putUcSecurable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurable">DataDatabricksAppAppResourcesUcSecurable</a>

---

##### `resetApp` <a name="resetApp" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetApp"></a>

```java
public void resetApp()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExperiment` <a name="resetExperiment" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetExperiment"></a>

```java
public void resetExperiment()
```

##### `resetGenieSpace` <a name="resetGenieSpace" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetGenieSpace"></a>

```java
public void resetGenieSpace()
```

##### `resetJob` <a name="resetJob" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetJob"></a>

```java
public void resetJob()
```

##### `resetPostgres` <a name="resetPostgres" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetPostgres"></a>

```java
public void resetPostgres()
```

##### `resetSecret` <a name="resetSecret" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetSecret"></a>

```java
public void resetSecret()
```

##### `resetServingEndpoint` <a name="resetServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetServingEndpoint"></a>

```java
public void resetServingEndpoint()
```

##### `resetSqlWarehouse` <a name="resetSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetSqlWarehouse"></a>

```java
public void resetSqlWarehouse()
```

##### `resetUcSecurable` <a name="resetUcSecurable" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.resetUcSecurable"></a>

```java
public void resetUcSecurable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference">DataDatabricksAppAppResourcesAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference">DataDatabricksAppAppResourcesDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.experiment">experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference">DataDatabricksAppAppResourcesExperimentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.genieSpace">genieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference">DataDatabricksAppAppResourcesGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.job">job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference">DataDatabricksAppAppResourcesJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.postgres">postgres</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference">DataDatabricksAppAppResourcesPostgresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference">DataDatabricksAppAppResourcesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.servingEndpoint">servingEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference">DataDatabricksAppAppResourcesServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.sqlWarehouse">sqlWarehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference">DataDatabricksAppAppResourcesSqlWarehouseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.ucSecurable">ucSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference">DataDatabricksAppAppResourcesUcSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.appInput">appInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesApp">DataDatabricksAppAppResourcesApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.databaseInput">databaseInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabase">DataDatabricksAppAppResourcesDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.experimentInput">experimentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperiment">DataDatabricksAppAppResourcesExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.genieSpaceInput">genieSpaceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpace">DataDatabricksAppAppResourcesGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.jobInput">jobInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJob">DataDatabricksAppAppResourcesJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.postgresInput">postgresInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgres">DataDatabricksAppAppResourcesPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.secretInput">secretInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecret">DataDatabricksAppAppResourcesSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.servingEndpointInput">servingEndpointInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpoint">DataDatabricksAppAppResourcesServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.sqlWarehouseInput">sqlWarehouseInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouse">DataDatabricksAppAppResourcesSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.ucSecurableInput">ucSecurableInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurable">DataDatabricksAppAppResourcesUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources">DataDatabricksAppAppResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.app"></a>

```java
public DataDatabricksAppAppResourcesAppOutputReference getApp();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesAppOutputReference">DataDatabricksAppAppResourcesAppOutputReference</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.database"></a>

```java
public DataDatabricksAppAppResourcesDatabaseOutputReference getDatabase();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabaseOutputReference">DataDatabricksAppAppResourcesDatabaseOutputReference</a>

---

##### `experiment`<sup>Required</sup> <a name="experiment" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.experiment"></a>

```java
public DataDatabricksAppAppResourcesExperimentOutputReference getExperiment();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperimentOutputReference">DataDatabricksAppAppResourcesExperimentOutputReference</a>

---

##### `genieSpace`<sup>Required</sup> <a name="genieSpace" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.genieSpace"></a>

```java
public DataDatabricksAppAppResourcesGenieSpaceOutputReference getGenieSpace();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpaceOutputReference">DataDatabricksAppAppResourcesGenieSpaceOutputReference</a>

---

##### `job`<sup>Required</sup> <a name="job" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.job"></a>

```java
public DataDatabricksAppAppResourcesJobOutputReference getJob();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJobOutputReference">DataDatabricksAppAppResourcesJobOutputReference</a>

---

##### `postgres`<sup>Required</sup> <a name="postgres" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.postgres"></a>

```java
public DataDatabricksAppAppResourcesPostgresOutputReference getPostgres();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference">DataDatabricksAppAppResourcesPostgresOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.secret"></a>

```java
public DataDatabricksAppAppResourcesSecretOutputReference getSecret();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference">DataDatabricksAppAppResourcesSecretOutputReference</a>

---

##### `servingEndpoint`<sup>Required</sup> <a name="servingEndpoint" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.servingEndpoint"></a>

```java
public DataDatabricksAppAppResourcesServingEndpointOutputReference getServingEndpoint();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference">DataDatabricksAppAppResourcesServingEndpointOutputReference</a>

---

##### `sqlWarehouse`<sup>Required</sup> <a name="sqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.sqlWarehouse"></a>

```java
public DataDatabricksAppAppResourcesSqlWarehouseOutputReference getSqlWarehouse();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference">DataDatabricksAppAppResourcesSqlWarehouseOutputReference</a>

---

##### `ucSecurable`<sup>Required</sup> <a name="ucSecurable" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.ucSecurable"></a>

```java
public DataDatabricksAppAppResourcesUcSecurableOutputReference getUcSecurable();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference">DataDatabricksAppAppResourcesUcSecurableOutputReference</a>

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.appInput"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesApp getAppInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesApp">DataDatabricksAppAppResourcesApp</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.databaseInput"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesDatabase getDatabaseInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesDatabase">DataDatabricksAppAppResourcesDatabase</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `experimentInput`<sup>Optional</sup> <a name="experimentInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.experimentInput"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesExperiment getExperimentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesExperiment">DataDatabricksAppAppResourcesExperiment</a>

---

##### `genieSpaceInput`<sup>Optional</sup> <a name="genieSpaceInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.genieSpaceInput"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesGenieSpace getGenieSpaceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesGenieSpace">DataDatabricksAppAppResourcesGenieSpace</a>

---

##### `jobInput`<sup>Optional</sup> <a name="jobInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.jobInput"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesJob getJobInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesJob">DataDatabricksAppAppResourcesJob</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `postgresInput`<sup>Optional</sup> <a name="postgresInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.postgresInput"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesPostgres getPostgresInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgres">DataDatabricksAppAppResourcesPostgres</a>

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.secretInput"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesSecret getSecretInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecret">DataDatabricksAppAppResourcesSecret</a>

---

##### `servingEndpointInput`<sup>Optional</sup> <a name="servingEndpointInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.servingEndpointInput"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesServingEndpoint getServingEndpointInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpoint">DataDatabricksAppAppResourcesServingEndpoint</a>

---

##### `sqlWarehouseInput`<sup>Optional</sup> <a name="sqlWarehouseInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.sqlWarehouseInput"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesSqlWarehouse getSqlWarehouseInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouse">DataDatabricksAppAppResourcesSqlWarehouse</a>

---

##### `ucSecurableInput`<sup>Optional</sup> <a name="ucSecurableInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.ucSecurableInput"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesUcSecurable getUcSecurableInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurable">DataDatabricksAppAppResourcesUcSecurable</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppResources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResources">DataDatabricksAppAppResources</a>

---


### DataDatabricksAppAppResourcesPostgresOutputReference <a name="DataDatabricksAppAppResourcesPostgresOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesPostgresOutputReference;

new DataDatabricksAppAppResourcesPostgresOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgres">DataDatabricksAppAppResourcesPostgres</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgresOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesPostgres getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesPostgres">DataDatabricksAppAppResourcesPostgres</a>

---


### DataDatabricksAppAppResourcesSecretOutputReference <a name="DataDatabricksAppAppResourcesSecretOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesSecretOutputReference;

new DataDatabricksAppAppResourcesSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecret">DataDatabricksAppAppResourcesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecretOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesSecret getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSecret">DataDatabricksAppAppResourcesSecret</a>

---


### DataDatabricksAppAppResourcesServingEndpointOutputReference <a name="DataDatabricksAppAppResourcesServingEndpointOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesServingEndpointOutputReference;

new DataDatabricksAppAppResourcesServingEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpoint">DataDatabricksAppAppResourcesServingEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpointOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesServingEndpoint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesServingEndpoint">DataDatabricksAppAppResourcesServingEndpoint</a>

---


### DataDatabricksAppAppResourcesSqlWarehouseOutputReference <a name="DataDatabricksAppAppResourcesSqlWarehouseOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesSqlWarehouseOutputReference;

new DataDatabricksAppAppResourcesSqlWarehouseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouse">DataDatabricksAppAppResourcesSqlWarehouse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouseOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesSqlWarehouse getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesSqlWarehouse">DataDatabricksAppAppResourcesSqlWarehouse</a>

---


### DataDatabricksAppAppResourcesUcSecurableOutputReference <a name="DataDatabricksAppAppResourcesUcSecurableOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppResourcesUcSecurableOutputReference;

new DataDatabricksAppAppResourcesUcSecurableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.securableKind">securableKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.securableFullNameInput">securableFullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.securableTypeInput">securableTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.securableFullName">securableFullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.securableType">securableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurable">DataDatabricksAppAppResourcesUcSecurable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securableKind`<sup>Required</sup> <a name="securableKind" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.securableKind"></a>

```java
public java.lang.String getSecurableKind();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `securableFullNameInput`<sup>Optional</sup> <a name="securableFullNameInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.securableFullNameInput"></a>

```java
public java.lang.String getSecurableFullNameInput();
```

- *Type:* java.lang.String

---

##### `securableTypeInput`<sup>Optional</sup> <a name="securableTypeInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.securableTypeInput"></a>

```java
public java.lang.String getSecurableTypeInput();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `securableFullName`<sup>Required</sup> <a name="securableFullName" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.securableFullName"></a>

```java
public java.lang.String getSecurableFullName();
```

- *Type:* java.lang.String

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.securableType"></a>

```java
public java.lang.String getSecurableType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurableOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppResourcesUcSecurable getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppResourcesUcSecurable">DataDatabricksAppAppResourcesUcSecurable</a>

---


### DataDatabricksAppAppTelemetryExportDestinationsList <a name="DataDatabricksAppAppTelemetryExportDestinationsList" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppTelemetryExportDestinationsList;

new DataDatabricksAppAppTelemetryExportDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.get"></a>

```java
public DataDatabricksAppAppTelemetryExportDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinations">DataDatabricksAppAppTelemetryExportDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksAppAppTelemetryExportDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinations">DataDatabricksAppAppTelemetryExportDestinations</a>>

---


### DataDatabricksAppAppTelemetryExportDestinationsOutputReference <a name="DataDatabricksAppAppTelemetryExportDestinationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppTelemetryExportDestinationsOutputReference;

new DataDatabricksAppAppTelemetryExportDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.putUnityCatalog">putUnityCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.resetUnityCatalog">resetUnityCatalog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUnityCatalog` <a name="putUnityCatalog" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.putUnityCatalog"></a>

```java
public void putUnityCatalog(DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.putUnityCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog</a>

---

##### `resetUnityCatalog` <a name="resetUnityCatalog" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.resetUnityCatalog"></a>

```java
public void resetUnityCatalog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.property.unityCatalog">unityCatalog</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference">DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.property.unityCatalogInput">unityCatalogInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinations">DataDatabricksAppAppTelemetryExportDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unityCatalog`<sup>Required</sup> <a name="unityCatalog" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.property.unityCatalog"></a>

```java
public DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference getUnityCatalog();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference">DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference</a>

---

##### `unityCatalogInput`<sup>Optional</sup> <a name="unityCatalogInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.property.unityCatalogInput"></a>

```java
public IResolvable|DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog getUnityCatalogInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppTelemetryExportDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinations">DataDatabricksAppAppTelemetryExportDestinations</a>

---


### DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference <a name="DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference;

new DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTableInput">logsTableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTableInput">metricsTableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTableInput">tracesTableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTable">logsTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTable">metricsTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTable">tracesTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logsTableInput`<sup>Optional</sup> <a name="logsTableInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTableInput"></a>

```java
public java.lang.String getLogsTableInput();
```

- *Type:* java.lang.String

---

##### `metricsTableInput`<sup>Optional</sup> <a name="metricsTableInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTableInput"></a>

```java
public java.lang.String getMetricsTableInput();
```

- *Type:* java.lang.String

---

##### `tracesTableInput`<sup>Optional</sup> <a name="tracesTableInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTableInput"></a>

```java
public java.lang.String getTracesTableInput();
```

- *Type:* java.lang.String

---

##### `logsTable`<sup>Required</sup> <a name="logsTable" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTable"></a>

```java
public java.lang.String getLogsTable();
```

- *Type:* java.lang.String

---

##### `metricsTable`<sup>Required</sup> <a name="metricsTable" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTable"></a>

```java
public java.lang.String getMetricsTable();
```

- *Type:* java.lang.String

---

##### `tracesTable`<sup>Required</sup> <a name="tracesTable" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTable"></a>

```java
public java.lang.String getTracesTable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalogOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog">DataDatabricksAppAppTelemetryExportDestinationsUnityCatalog</a>

---


### DataDatabricksAppProviderConfigOutputReference <a name="DataDatabricksAppProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_app.DataDatabricksAppProviderConfigOutputReference;

new DataDatabricksAppProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfig">DataDatabricksAppProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAppProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksApp.DataDatabricksAppProviderConfig">DataDatabricksAppProviderConfig</a>

---



