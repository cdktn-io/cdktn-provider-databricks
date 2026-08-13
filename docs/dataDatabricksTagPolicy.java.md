# `dataDatabricksTagPolicy` Submodule <a name="`dataDatabricksTagPolicy` Submodule" id="@cdktn/provider-databricks.dataDatabricksTagPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksTagPolicy <a name="DataDatabricksTagPolicy" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/tag_policy databricks_tag_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_tag_policy.DataDatabricksTagPolicy;

DataDatabricksTagPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .tagKey(java.lang.String)
//  .providerConfig(DataDatabricksTagPolicyProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/tag_policy#tag_key DataDatabricksTagPolicy#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfig">DataDatabricksTagPolicyProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/tag_policy#provider_config DataDatabricksTagPolicy#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.tagKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/tag_policy#tag_key DataDatabricksTagPolicy#tag_key}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfig">DataDatabricksTagPolicyProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/tag_policy#provider_config DataDatabricksTagPolicy#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksTagPolicyProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfig">DataDatabricksTagPolicyProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksTagPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_tag_policy.DataDatabricksTagPolicy;

DataDatabricksTagPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_tag_policy.DataDatabricksTagPolicy;

DataDatabricksTagPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_tag_policy.DataDatabricksTagPolicy;

DataDatabricksTagPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_tag_policy.DataDatabricksTagPolicy;

DataDatabricksTagPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksTagPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksTagPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksTagPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksTagPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/tag_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksTagPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference">DataDatabricksTagPolicyProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.values">values</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList">DataDatabricksTagPolicyValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfig">DataDatabricksTagPolicyProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.providerConfig"></a>

```java
public DataDatabricksTagPolicyProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference">DataDatabricksTagPolicyProviderConfigOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.values"></a>

```java
public DataDatabricksTagPolicyValuesList getValues();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList">DataDatabricksTagPolicyValuesList</a>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksTagPolicyProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfig">DataDatabricksTagPolicyProviderConfig</a>

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksTagPolicyConfig <a name="DataDatabricksTagPolicyConfig" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_tag_policy.DataDatabricksTagPolicyConfig;

DataDatabricksTagPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .tagKey(java.lang.String)
//  .providerConfig(DataDatabricksTagPolicyProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/tag_policy#tag_key DataDatabricksTagPolicy#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfig">DataDatabricksTagPolicyProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/tag_policy#provider_config DataDatabricksTagPolicy#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/tag_policy#tag_key DataDatabricksTagPolicy#tag_key}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyConfig.property.providerConfig"></a>

```java
public DataDatabricksTagPolicyProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfig">DataDatabricksTagPolicyProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/tag_policy#provider_config DataDatabricksTagPolicy#provider_config}.

---

### DataDatabricksTagPolicyProviderConfig <a name="DataDatabricksTagPolicyProviderConfig" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_tag_policy.DataDatabricksTagPolicyProviderConfig;

DataDatabricksTagPolicyProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/tag_policy#workspace_id DataDatabricksTagPolicy#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/tag_policy#workspace_id DataDatabricksTagPolicy#workspace_id}.

---

### DataDatabricksTagPolicyValues <a name="DataDatabricksTagPolicyValues" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValues.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_tag_policy.DataDatabricksTagPolicyValues;

DataDatabricksTagPolicyValues.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValues.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/tag_policy#name DataDatabricksTagPolicy#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValues.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/tag_policy#name DataDatabricksTagPolicy#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksTagPolicyProviderConfigOutputReference <a name="DataDatabricksTagPolicyProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_tag_policy.DataDatabricksTagPolicyProviderConfigOutputReference;

new DataDatabricksTagPolicyProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfig">DataDatabricksTagPolicyProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksTagPolicyProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyProviderConfig">DataDatabricksTagPolicyProviderConfig</a>

---


### DataDatabricksTagPolicyValuesList <a name="DataDatabricksTagPolicyValuesList" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_tag_policy.DataDatabricksTagPolicyValuesList;

new DataDatabricksTagPolicyValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.get"></a>

```java
public DataDatabricksTagPolicyValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValues">DataDatabricksTagPolicyValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksTagPolicyValues> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValues">DataDatabricksTagPolicyValues</a>>

---


### DataDatabricksTagPolicyValuesOutputReference <a name="DataDatabricksTagPolicyValuesOutputReference" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_tag_policy.DataDatabricksTagPolicyValuesOutputReference;

new DataDatabricksTagPolicyValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValues">DataDatabricksTagPolicyValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValuesOutputReference.property.internalValue"></a>

```java
public DataDatabricksTagPolicyValues getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicy.DataDatabricksTagPolicyValues">DataDatabricksTagPolicyValues</a>

---



