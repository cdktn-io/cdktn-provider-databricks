# `dataDatabricksPolicyInfo` Submodule <a name="`dataDatabricksPolicyInfo` Submodule" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPolicyInfo <a name="DataDatabricksPolicyInfo" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info databricks_policy_info}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfo;

DataDatabricksPolicyInfo.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .onSecurableFullname(java.lang.String)
    .onSecurableType(java.lang.String)
//  .providerConfig(DataDatabricksPolicyInfoProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#name DataDatabricksPolicyInfo#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.onSecurableFullname">onSecurableFullname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#on_securable_fullname DataDatabricksPolicyInfo#on_securable_fullname}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.onSecurableType">onSecurableType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#on_securable_type DataDatabricksPolicyInfo#on_securable_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#provider_config DataDatabricksPolicyInfo#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#name DataDatabricksPolicyInfo#name}.

---

##### `onSecurableFullname`<sup>Required</sup> <a name="onSecurableFullname" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.onSecurableFullname"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#on_securable_fullname DataDatabricksPolicyInfo#on_securable_fullname}.

---

##### `onSecurableType`<sup>Required</sup> <a name="onSecurableType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.onSecurableType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#on_securable_type DataDatabricksPolicyInfo#on_securable_type}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#provider_config DataDatabricksPolicyInfo#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksPolicyInfoProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPolicyInfo resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfo;

DataDatabricksPolicyInfo.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfo;

DataDatabricksPolicyInfo.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfo;

DataDatabricksPolicyInfo.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfo;

DataDatabricksPolicyInfo.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksPolicyInfo.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksPolicyInfo resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksPolicyInfo to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksPolicyInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPolicyInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.columnMask">columnMask</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference">DataDatabricksPolicyInfoColumnMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.exceptPrincipals">exceptPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forSecurableType">forSecurableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.grant">grant</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference">DataDatabricksPolicyInfoGrantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.matchColumns">matchColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList">DataDatabricksPolicyInfoMatchColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference">DataDatabricksPolicyInfoProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference">DataDatabricksPolicyInfoRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.toPrincipals">toPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.whenCondition">whenCondition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullnameInput">onSecurableFullnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableTypeInput">onSecurableTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullname">onSecurableFullname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableType">onSecurableType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `columnMask`<sup>Required</sup> <a name="columnMask" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.columnMask"></a>

```java
public DataDatabricksPolicyInfoColumnMaskOutputReference getColumnMask();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference">DataDatabricksPolicyInfoColumnMaskOutputReference</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `exceptPrincipals`<sup>Required</sup> <a name="exceptPrincipals" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.exceptPrincipals"></a>

```java
public java.util.List<java.lang.String> getExceptPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forSecurableType`<sup>Required</sup> <a name="forSecurableType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forSecurableType"></a>

```java
public java.lang.String getForSecurableType();
```

- *Type:* java.lang.String

---

##### `grant`<sup>Required</sup> <a name="grant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.grant"></a>

```java
public DataDatabricksPolicyInfoGrantOutputReference getGrant();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference">DataDatabricksPolicyInfoGrantOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `matchColumns`<sup>Required</sup> <a name="matchColumns" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.matchColumns"></a>

```java
public DataDatabricksPolicyInfoMatchColumnsList getMatchColumns();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList">DataDatabricksPolicyInfoMatchColumnsList</a>

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.providerConfig"></a>

```java
public DataDatabricksPolicyInfoProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference">DataDatabricksPolicyInfoProviderConfigOutputReference</a>

---

##### `rowFilter`<sup>Required</sup> <a name="rowFilter" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.rowFilter"></a>

```java
public DataDatabricksPolicyInfoRowFilterOutputReference getRowFilter();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference">DataDatabricksPolicyInfoRowFilterOutputReference</a>

---

##### `toPrincipals`<sup>Required</sup> <a name="toPrincipals" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.toPrincipals"></a>

```java
public java.util.List<java.lang.String> getToPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `whenCondition`<sup>Required</sup> <a name="whenCondition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.whenCondition"></a>

```java
public java.lang.String getWhenCondition();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `onSecurableFullnameInput`<sup>Optional</sup> <a name="onSecurableFullnameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullnameInput"></a>

```java
public java.lang.String getOnSecurableFullnameInput();
```

- *Type:* java.lang.String

---

##### `onSecurableTypeInput`<sup>Optional</sup> <a name="onSecurableTypeInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableTypeInput"></a>

```java
public java.lang.String getOnSecurableTypeInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksPolicyInfoProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `onSecurableFullname`<sup>Required</sup> <a name="onSecurableFullname" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullname"></a>

```java
public java.lang.String getOnSecurableFullname();
```

- *Type:* java.lang.String

---

##### `onSecurableType`<sup>Required</sup> <a name="onSecurableType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableType"></a>

```java
public java.lang.String getOnSecurableType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPolicyInfoColumnMask <a name="DataDatabricksPolicyInfoColumnMask" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoColumnMask;

DataDatabricksPolicyInfoColumnMask.builder()
    .functionName(java.lang.String)
    .onColumn(java.lang.String)
//  .using(IResolvable|java.util.List<DataDatabricksPolicyInfoColumnMaskUsing>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.onColumn">onColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#on_column DataDatabricksPolicyInfo#on_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.using">using</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}. |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}.

---

##### `onColumn`<sup>Required</sup> <a name="onColumn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.onColumn"></a>

```java
public java.lang.String getOnColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#on_column DataDatabricksPolicyInfo#on_column}.

---

##### `using`<sup>Optional</sup> <a name="using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.using"></a>

```java
public IResolvable|java.util.List<DataDatabricksPolicyInfoColumnMaskUsing> getUsing();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}.

---

### DataDatabricksPolicyInfoColumnMaskUsing <a name="DataDatabricksPolicyInfoColumnMaskUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoColumnMaskUsing;

DataDatabricksPolicyInfoColumnMaskUsing.builder()
//  .alias(java.lang.String)
//  .constant(java.lang.String)
//  .functionArgExpression(DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.alias">alias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.constant">constant</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.functionArgExpression">functionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#function_arg_expression DataDatabricksPolicyInfo#function_arg_expression}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}.

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.constant"></a>

```java
public java.lang.String getConstant();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}.

---

##### `functionArgExpression`<sup>Optional</sup> <a name="functionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.functionArgExpression"></a>

```java
public DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression getFunctionArgExpression();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#function_arg_expression DataDatabricksPolicyInfo#function_arg_expression}.

---

### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression;

DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression.builder()
//  .tagIntrospection(DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression.property.tagIntrospection">tagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#tag_introspection DataDatabricksPolicyInfo#tag_introspection}. |

---

##### `tagIntrospection`<sup>Optional</sup> <a name="tagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression.property.tagIntrospection"></a>

```java
public DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection getTagIntrospection();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#tag_introspection DataDatabricksPolicyInfo#tag_introspection}.

---

### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection;

DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.builder()
//  .columnTagValue(DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue)
//  .tagValue(DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.property.columnTagValue">columnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#column_tag_value DataDatabricksPolicyInfo#column_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.property.tagValue">tagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#tag_value DataDatabricksPolicyInfo#tag_value}. |

---

##### `columnTagValue`<sup>Optional</sup> <a name="columnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.property.columnTagValue"></a>

```java
public DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue getColumnTagValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#column_tag_value DataDatabricksPolicyInfo#column_tag_value}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.property.tagValue"></a>

```java
public DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue getTagValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#tag_value DataDatabricksPolicyInfo#tag_value}.

---

### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue;

DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.builder()
    .columnAlias(java.lang.String)
    .tagKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias">columnAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#column_alias DataDatabricksPolicyInfo#column_alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}. |

---

##### `columnAlias`<sup>Required</sup> <a name="columnAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias"></a>

```java
public java.lang.String getColumnAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#column_alias DataDatabricksPolicyInfo#column_alias}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}.

---

### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue;

DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.builder()
    .tagKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}.

---

### DataDatabricksPolicyInfoConfig <a name="DataDatabricksPolicyInfoConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoConfig;

DataDatabricksPolicyInfoConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .onSecurableFullname(java.lang.String)
    .onSecurableType(java.lang.String)
//  .providerConfig(DataDatabricksPolicyInfoProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#name DataDatabricksPolicyInfo#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableFullname">onSecurableFullname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#on_securable_fullname DataDatabricksPolicyInfo#on_securable_fullname}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableType">onSecurableType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#on_securable_type DataDatabricksPolicyInfo#on_securable_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#provider_config DataDatabricksPolicyInfo#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#name DataDatabricksPolicyInfo#name}.

---

##### `onSecurableFullname`<sup>Required</sup> <a name="onSecurableFullname" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableFullname"></a>

```java
public java.lang.String getOnSecurableFullname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#on_securable_fullname DataDatabricksPolicyInfo#on_securable_fullname}.

---

##### `onSecurableType`<sup>Required</sup> <a name="onSecurableType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableType"></a>

```java
public java.lang.String getOnSecurableType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#on_securable_type DataDatabricksPolicyInfo#on_securable_type}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.providerConfig"></a>

```java
public DataDatabricksPolicyInfoProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#provider_config DataDatabricksPolicyInfo#provider_config}.

---

### DataDatabricksPolicyInfoGrant <a name="DataDatabricksPolicyInfoGrant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoGrant;

DataDatabricksPolicyInfoGrant.builder()
    .privileges(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant.property.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#privileges DataDatabricksPolicyInfo#privileges}. |

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant.property.privileges"></a>

```java
public java.util.List<java.lang.String> getPrivileges();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#privileges DataDatabricksPolicyInfo#privileges}.

---

### DataDatabricksPolicyInfoMatchColumns <a name="DataDatabricksPolicyInfoMatchColumns" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoMatchColumns;

DataDatabricksPolicyInfoMatchColumns.builder()
//  .alias(java.lang.String)
//  .condition(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.alias">alias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.condition">condition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#condition DataDatabricksPolicyInfo#condition}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#condition DataDatabricksPolicyInfo#condition}.

---

### DataDatabricksPolicyInfoProviderConfig <a name="DataDatabricksPolicyInfoProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoProviderConfig;

DataDatabricksPolicyInfoProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#workspace_id DataDatabricksPolicyInfo#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#workspace_id DataDatabricksPolicyInfo#workspace_id}.

---

### DataDatabricksPolicyInfoRowFilter <a name="DataDatabricksPolicyInfoRowFilter" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoRowFilter;

DataDatabricksPolicyInfoRowFilter.builder()
    .functionName(java.lang.String)
//  .using(IResolvable|java.util.List<DataDatabricksPolicyInfoRowFilterUsing>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.using">using</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}. |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}.

---

##### `using`<sup>Optional</sup> <a name="using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.using"></a>

```java
public IResolvable|java.util.List<DataDatabricksPolicyInfoRowFilterUsing> getUsing();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}.

---

### DataDatabricksPolicyInfoRowFilterUsing <a name="DataDatabricksPolicyInfoRowFilterUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoRowFilterUsing;

DataDatabricksPolicyInfoRowFilterUsing.builder()
//  .alias(java.lang.String)
//  .constant(java.lang.String)
//  .functionArgExpression(DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.alias">alias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.constant">constant</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.functionArgExpression">functionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#function_arg_expression DataDatabricksPolicyInfo#function_arg_expression}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}.

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.constant"></a>

```java
public java.lang.String getConstant();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}.

---

##### `functionArgExpression`<sup>Optional</sup> <a name="functionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.functionArgExpression"></a>

```java
public DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression getFunctionArgExpression();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#function_arg_expression DataDatabricksPolicyInfo#function_arg_expression}.

---

### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression;

DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression.builder()
//  .tagIntrospection(DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression.property.tagIntrospection">tagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#tag_introspection DataDatabricksPolicyInfo#tag_introspection}. |

---

##### `tagIntrospection`<sup>Optional</sup> <a name="tagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression.property.tagIntrospection"></a>

```java
public DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection getTagIntrospection();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#tag_introspection DataDatabricksPolicyInfo#tag_introspection}.

---

### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection;

DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.builder()
//  .columnTagValue(DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue)
//  .tagValue(DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.property.columnTagValue">columnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#column_tag_value DataDatabricksPolicyInfo#column_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.property.tagValue">tagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#tag_value DataDatabricksPolicyInfo#tag_value}. |

---

##### `columnTagValue`<sup>Optional</sup> <a name="columnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.property.columnTagValue"></a>

```java
public DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue getColumnTagValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#column_tag_value DataDatabricksPolicyInfo#column_tag_value}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.property.tagValue"></a>

```java
public DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue getTagValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#tag_value DataDatabricksPolicyInfo#tag_value}.

---

### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue;

DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.builder()
    .columnAlias(java.lang.String)
    .tagKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias">columnAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#column_alias DataDatabricksPolicyInfo#column_alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}. |

---

##### `columnAlias`<sup>Required</sup> <a name="columnAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias"></a>

```java
public java.lang.String getColumnAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#column_alias DataDatabricksPolicyInfo#column_alias}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}.

---

### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue;

DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.builder()
    .tagKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPolicyInfoColumnMaskOutputReference <a name="DataDatabricksPolicyInfoColumnMaskOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoColumnMaskOutputReference;

new DataDatabricksPolicyInfoColumnMaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.putUsing">putUsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resetUsing">resetUsing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsing` <a name="putUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.putUsing"></a>

```java
public void putUsing(IResolvable|java.util.List<DataDatabricksPolicyInfoColumnMaskUsing> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.putUsing.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>>

---

##### `resetUsing` <a name="resetUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resetUsing"></a>

```java
public void resetUsing()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.using">using</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList">DataDatabricksPolicyInfoColumnMaskUsingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumnInput">onColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.usingInput">usingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumn">onColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask">DataDatabricksPolicyInfoColumnMask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.using"></a>

```java
public DataDatabricksPolicyInfoColumnMaskUsingList getUsing();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList">DataDatabricksPolicyInfoColumnMaskUsingList</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `onColumnInput`<sup>Optional</sup> <a name="onColumnInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumnInput"></a>

```java
public java.lang.String getOnColumnInput();
```

- *Type:* java.lang.String

---

##### `usingInput`<sup>Optional</sup> <a name="usingInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.usingInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksPolicyInfoColumnMaskUsing> getUsingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `onColumn`<sup>Required</sup> <a name="onColumn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumn"></a>

```java
public java.lang.String getOnColumn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.internalValue"></a>

```java
public DataDatabricksPolicyInfoColumnMask getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask">DataDatabricksPolicyInfoColumnMask</a>

---


### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference;

new DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection">putTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resetTagIntrospection">resetTagIntrospection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagIntrospection` <a name="putTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection"></a>

```java
public void putTagIntrospection(DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

---

##### `resetTagIntrospection` <a name="resetTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resetTagIntrospection"></a>

```java
public void resetTagIntrospection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospection">tagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput">tagIntrospectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagIntrospection`<sup>Required</sup> <a name="tagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospection"></a>

```java
public DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference getTagIntrospection();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference</a>

---

##### `tagIntrospectionInput`<sup>Optional</sup> <a name="tagIntrospectionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput"></a>

```java
public IResolvable|DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection getTagIntrospectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression</a>

---


### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference;

new DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput">columnAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias">columnAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnAliasInput`<sup>Optional</sup> <a name="columnAliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput"></a>

```java
public java.lang.String getColumnAliasInput();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `columnAlias`<sup>Required</sup> <a name="columnAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias"></a>

```java
public java.lang.String getColumnAlias();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---


### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference;

new DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue">putColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue">putTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue">resetColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnTagValue` <a name="putColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue"></a>

```java
public void putColumnTagValue(DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `putTagValue` <a name="putTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue"></a>

```java
public void putTagValue(DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `resetColumnTagValue` <a name="resetColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue"></a>

```java
public void resetColumnTagValue()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue">columnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue">tagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput">columnTagValueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnTagValue`<sup>Required</sup> <a name="columnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue"></a>

```java
public DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference getColumnTagValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a>

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue"></a>

```java
public DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference getTagValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a>

---

##### `columnTagValueInput`<sup>Optional</sup> <a name="columnTagValueInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput"></a>

```java
public IResolvable|DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue getColumnTagValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput"></a>

```java
public IResolvable|DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue getTagValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

---


### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference;

new DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---


### DataDatabricksPolicyInfoColumnMaskUsingList <a name="DataDatabricksPolicyInfoColumnMaskUsingList" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoColumnMaskUsingList;

new DataDatabricksPolicyInfoColumnMaskUsingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.get"></a>

```java
public DataDatabricksPolicyInfoColumnMaskUsingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksPolicyInfoColumnMaskUsing> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>>

---


### DataDatabricksPolicyInfoColumnMaskUsingOutputReference <a name="DataDatabricksPolicyInfoColumnMaskUsingOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoColumnMaskUsingOutputReference;

new DataDatabricksPolicyInfoColumnMaskUsingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.putFunctionArgExpression">putFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetConstant">resetConstant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetFunctionArgExpression">resetFunctionArgExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFunctionArgExpression` <a name="putFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.putFunctionArgExpression"></a>

```java
public void putFunctionArgExpression(DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.putFunctionArgExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression</a>

---

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetConstant` <a name="resetConstant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetConstant"></a>

```java
public void resetConstant()
```

##### `resetFunctionArgExpression` <a name="resetFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetFunctionArgExpression"></a>

```java
public void resetFunctionArgExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.functionArgExpression">functionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constantInput">constantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.functionArgExpressionInput">functionArgExpressionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constant">constant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionArgExpression`<sup>Required</sup> <a name="functionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.functionArgExpression"></a>

```java
public DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference getFunctionArgExpression();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `constantInput`<sup>Optional</sup> <a name="constantInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constantInput"></a>

```java
public java.lang.String getConstantInput();
```

- *Type:* java.lang.String

---

##### `functionArgExpressionInput`<sup>Optional</sup> <a name="functionArgExpressionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.functionArgExpressionInput"></a>

```java
public IResolvable|DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression getFunctionArgExpressionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constant"></a>

```java
public java.lang.String getConstant();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPolicyInfoColumnMaskUsing getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>

---


### DataDatabricksPolicyInfoGrantOutputReference <a name="DataDatabricksPolicyInfoGrantOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoGrantOutputReference;

new DataDatabricksPolicyInfoGrantOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.privilegesInput">privilegesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant">DataDatabricksPolicyInfoGrant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privilegesInput`<sup>Optional</sup> <a name="privilegesInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.privilegesInput"></a>

```java
public java.util.List<java.lang.String> getPrivilegesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.privileges"></a>

```java
public java.util.List<java.lang.String> getPrivileges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.internalValue"></a>

```java
public DataDatabricksPolicyInfoGrant getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant">DataDatabricksPolicyInfoGrant</a>

---


### DataDatabricksPolicyInfoMatchColumnsList <a name="DataDatabricksPolicyInfoMatchColumnsList" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoMatchColumnsList;

new DataDatabricksPolicyInfoMatchColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.get"></a>

```java
public DataDatabricksPolicyInfoMatchColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksPolicyInfoMatchColumns> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a>>

---


### DataDatabricksPolicyInfoMatchColumnsOutputReference <a name="DataDatabricksPolicyInfoMatchColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoMatchColumnsOutputReference;

new DataDatabricksPolicyInfoMatchColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetCondition"></a>

```java
public void resetCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.internalValue"></a>

```java
public DataDatabricksPolicyInfoMatchColumns getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a>

---


### DataDatabricksPolicyInfoProviderConfigOutputReference <a name="DataDatabricksPolicyInfoProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoProviderConfigOutputReference;

new DataDatabricksPolicyInfoProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPolicyInfoProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a>

---


### DataDatabricksPolicyInfoRowFilterOutputReference <a name="DataDatabricksPolicyInfoRowFilterOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoRowFilterOutputReference;

new DataDatabricksPolicyInfoRowFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.putUsing">putUsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resetUsing">resetUsing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsing` <a name="putUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.putUsing"></a>

```java
public void putUsing(IResolvable|java.util.List<DataDatabricksPolicyInfoRowFilterUsing> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.putUsing.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>>

---

##### `resetUsing` <a name="resetUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resetUsing"></a>

```java
public void resetUsing()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.using">using</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList">DataDatabricksPolicyInfoRowFilterUsingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.usingInput">usingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter">DataDatabricksPolicyInfoRowFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.using"></a>

```java
public DataDatabricksPolicyInfoRowFilterUsingList getUsing();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList">DataDatabricksPolicyInfoRowFilterUsingList</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `usingInput`<sup>Optional</sup> <a name="usingInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.usingInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksPolicyInfoRowFilterUsing> getUsingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.internalValue"></a>

```java
public DataDatabricksPolicyInfoRowFilter getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter">DataDatabricksPolicyInfoRowFilter</a>

---


### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference;

new DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection">putTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resetTagIntrospection">resetTagIntrospection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagIntrospection` <a name="putTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection"></a>

```java
public void putTagIntrospection(DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a>

---

##### `resetTagIntrospection` <a name="resetTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resetTagIntrospection"></a>

```java
public void resetTagIntrospection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospection">tagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput">tagIntrospectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagIntrospection`<sup>Required</sup> <a name="tagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospection"></a>

```java
public DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference getTagIntrospection();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference</a>

---

##### `tagIntrospectionInput`<sup>Optional</sup> <a name="tagIntrospectionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput"></a>

```java
public IResolvable|DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection getTagIntrospectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression</a>

---


### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference;

new DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput">columnAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias">columnAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnAliasInput`<sup>Optional</sup> <a name="columnAliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput"></a>

```java
public java.lang.String getColumnAliasInput();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `columnAlias`<sup>Required</sup> <a name="columnAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias"></a>

```java
public java.lang.String getColumnAlias();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---


### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference;

new DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue">putColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue">putTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue">resetColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnTagValue` <a name="putColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue"></a>

```java
public void putColumnTagValue(DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `putTagValue` <a name="putTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue"></a>

```java
public void putTagValue(DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `resetColumnTagValue` <a name="resetColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue"></a>

```java
public void resetColumnTagValue()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue">columnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue">tagValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput">columnTagValueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnTagValue`<sup>Required</sup> <a name="columnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue"></a>

```java
public DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference getColumnTagValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a>

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue"></a>

```java
public DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference getTagValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a>

---

##### `columnTagValueInput`<sup>Optional</sup> <a name="columnTagValueInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput"></a>

```java
public IResolvable|DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue getColumnTagValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput"></a>

```java
public IResolvable|DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue getTagValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a>

---


### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference;

new DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---


### DataDatabricksPolicyInfoRowFilterUsingList <a name="DataDatabricksPolicyInfoRowFilterUsingList" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoRowFilterUsingList;

new DataDatabricksPolicyInfoRowFilterUsingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.get"></a>

```java
public DataDatabricksPolicyInfoRowFilterUsingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksPolicyInfoRowFilterUsing> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>>

---


### DataDatabricksPolicyInfoRowFilterUsingOutputReference <a name="DataDatabricksPolicyInfoRowFilterUsingOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_policy_info.DataDatabricksPolicyInfoRowFilterUsingOutputReference;

new DataDatabricksPolicyInfoRowFilterUsingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.putFunctionArgExpression">putFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetConstant">resetConstant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetFunctionArgExpression">resetFunctionArgExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFunctionArgExpression` <a name="putFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.putFunctionArgExpression"></a>

```java
public void putFunctionArgExpression(DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.putFunctionArgExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression</a>

---

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetConstant` <a name="resetConstant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetConstant"></a>

```java
public void resetConstant()
```

##### `resetFunctionArgExpression` <a name="resetFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetFunctionArgExpression"></a>

```java
public void resetFunctionArgExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.functionArgExpression">functionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constantInput">constantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.functionArgExpressionInput">functionArgExpressionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constant">constant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionArgExpression`<sup>Required</sup> <a name="functionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.functionArgExpression"></a>

```java
public DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference getFunctionArgExpression();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `constantInput`<sup>Optional</sup> <a name="constantInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constantInput"></a>

```java
public java.lang.String getConstantInput();
```

- *Type:* java.lang.String

---

##### `functionArgExpressionInput`<sup>Optional</sup> <a name="functionArgExpressionInput" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.functionArgExpressionInput"></a>

```java
public IResolvable|DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression getFunctionArgExpressionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constant"></a>

```java
public java.lang.String getConstant();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksPolicyInfoRowFilterUsing getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>

---



