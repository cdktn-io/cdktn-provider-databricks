# `dataDatabricksGenieAgents` Submodule <a name="`dataDatabricksGenieAgents` Submodule" id="@cdktn/provider-databricks.dataDatabricksGenieAgents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksGenieAgents <a name="DataDatabricksGenieAgents" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents databricks_genie_agents}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgents;

DataDatabricksGenieAgents.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksGenieAgentsProviderConfig)
//  .view(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#page_size DataDatabricksGenieAgents#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.view">view</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#view DataDatabricksGenieAgents#view}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.pageSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#page_size DataDatabricksGenieAgents#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.view"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#view DataDatabricksGenieAgents#view}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetView">resetView</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksGenieAgentsProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetPageSize"></a>

```java
public void resetPageSize()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetView` <a name="resetView" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetView"></a>

```java
public void resetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksGenieAgents resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgents;

DataDatabricksGenieAgents.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgents;

DataDatabricksGenieAgents.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgents;

DataDatabricksGenieAgents.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgents;

DataDatabricksGenieAgents.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksGenieAgents.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksGenieAgents resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksGenieAgents to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksGenieAgents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksGenieAgents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.genieAgents">genieAgents</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList">DataDatabricksGenieAgentsGenieAgentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference">DataDatabricksGenieAgentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.pageSizeInput">pageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.viewInput">viewInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.view">view</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `genieAgents`<sup>Required</sup> <a name="genieAgents" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.genieAgents"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsList getGenieAgents();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList">DataDatabricksGenieAgentsGenieAgentsList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.providerConfig"></a>

```java
public DataDatabricksGenieAgentsProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference">DataDatabricksGenieAgentsProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.pageSizeInput"></a>

```java
public java.lang.Number getPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksGenieAgentsProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a>

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.viewInput"></a>

```java
public java.lang.String getViewInput();
```

- *Type:* java.lang.String

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.view"></a>

```java
public java.lang.String getView();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksGenieAgentsConfig <a name="DataDatabricksGenieAgentsConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsConfig;

DataDatabricksGenieAgentsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksGenieAgentsProviderConfig)
//  .view(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#page_size DataDatabricksGenieAgents#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.view">view</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#view DataDatabricksGenieAgents#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#page_size DataDatabricksGenieAgents#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.providerConfig"></a>

```java
public DataDatabricksGenieAgentsProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.view"></a>

```java
public java.lang.String getView();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#view DataDatabricksGenieAgents#view}.

---

### DataDatabricksGenieAgentsGenieAgents <a name="DataDatabricksGenieAgentsGenieAgents" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgents;

DataDatabricksGenieAgentsGenieAgents.builder()
    .name(java.lang.String)
//  .providerConfig(DataDatabricksGenieAgentsGenieAgentsProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.property.providerConfig"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinition <a name="DataDatabricksGenieAgentsGenieAgentsDefinition" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinition;

DataDatabricksGenieAgentsGenieAgentsDefinition.builder()
//  .benchmarks(DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks)
//  .config(DataDatabricksGenieAgentsGenieAgentsDefinitionConfig)
//  .dataSources(DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources)
//  .instructions(DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.benchmarks">benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#benchmarks DataDatabricksGenieAgents#benchmarks}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#config DataDatabricksGenieAgents#config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#data_sources DataDatabricksGenieAgents#data_sources}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.instructions">instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instructions DataDatabricksGenieAgents#instructions}. |

---

##### `benchmarks`<sup>Optional</sup> <a name="benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.benchmarks"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks getBenchmarks();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#benchmarks DataDatabricksGenieAgents#benchmarks}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.config"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionConfig getConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#config DataDatabricksGenieAgents#config}.

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.dataSources"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources getDataSources();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#data_sources DataDatabricksGenieAgents#data_sources}.

---

##### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.instructions"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions getInstructions();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instructions DataDatabricksGenieAgents#instructions}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks;

DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks.builder()
//  .questions(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks.property.questions">questions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#questions DataDatabricksGenieAgents#questions}. |

---

##### `questions`<sup>Optional</sup> <a name="questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks.property.questions"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions> getQuestions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#questions DataDatabricksGenieAgents#questions}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions;

DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.builder()
    .id(java.lang.String)
    .question(java.lang.String)
//  .answer(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer>)
//  .evaluationNote(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.question">question</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.answer">answer</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#answer DataDatabricksGenieAgents#answer}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.evaluationNote">evaluationNote</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#evaluation_note DataDatabricksGenieAgents#evaluation_note}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.question"></a>

```java
public java.lang.String getQuestion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}.

---

##### `answer`<sup>Optional</sup> <a name="answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.answer"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer> getAnswer();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#answer DataDatabricksGenieAgents#answer}.

---

##### `evaluationNote`<sup>Optional</sup> <a name="evaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.evaluationNote"></a>

```java
public java.lang.String getEvaluationNote();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#evaluation_note DataDatabricksGenieAgents#evaluation_note}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer;

DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.builder()
    .content(java.lang.String)
    .format(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#format DataDatabricksGenieAgents#format}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#format DataDatabricksGenieAgents#format}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionConfig <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig;

DataDatabricksGenieAgentsGenieAgentsDefinitionConfig.builder()
//  .sampleQuestions(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig.property.sampleQuestions">sampleQuestions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sample_questions DataDatabricksGenieAgents#sample_questions}. |

---

##### `sampleQuestions`<sup>Optional</sup> <a name="sampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig.property.sampleQuestions"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions> getSampleQuestions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sample_questions DataDatabricksGenieAgents#sample_questions}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions;

DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.builder()
    .id(java.lang.String)
    .question(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.property.question">question</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.property.question"></a>

```java
public java.lang.String getQuestion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources;

DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.builder()
//  .mcpConnections(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections>)
//  .tables(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables>)
//  .volumes(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.mcpConnections">mcpConnections</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connections DataDatabricksGenieAgents#mcp_connections}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.tables">tables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#tables DataDatabricksGenieAgents#tables}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.volumes">volumes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#volumes DataDatabricksGenieAgents#volumes}. |

---

##### `mcpConnections`<sup>Optional</sup> <a name="mcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.mcpConnections"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections> getMcpConnections();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connections DataDatabricksGenieAgents#mcp_connections}.

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.tables"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables> getTables();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#tables DataDatabricksGenieAgents#tables}.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.volumes"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes> getVolumes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#volumes DataDatabricksGenieAgents#volumes}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections;

DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections.builder()
    .mcpConnection(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections.property.mcpConnection">mcpConnection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connection DataDatabricksGenieAgents#mcp_connection}. |

---

##### `mcpConnection`<sup>Required</sup> <a name="mcpConnection" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections.property.mcpConnection"></a>

```java
public java.lang.String getMcpConnection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connection DataDatabricksGenieAgents#mcp_connection}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables;

DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.builder()
    .identifier(java.lang.String)
//  .columnConfigs(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs>)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.columnConfigs">columnConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column_configs DataDatabricksGenieAgents#column_configs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

##### `columnConfigs`<sup>Optional</sup> <a name="columnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.columnConfigs"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs> getColumnConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column_configs DataDatabricksGenieAgents#column_configs}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs;

DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.builder()
    .column(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .enableEntityMatching(java.lang.Boolean|IResolvable)
//  .enableFormatAssistance(java.lang.Boolean|IResolvable)
//  .exclude(java.lang.Boolean|IResolvable)
//  .synonyms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.column">column</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column DataDatabricksGenieAgents#column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching">enableEntityMatching</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_entity_matching DataDatabricksGenieAgents#enable_entity_matching}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance">enableFormatAssistance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_format_assistance DataDatabricksGenieAgents#enable_format_assistance}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.exclude">exclude</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#exclude DataDatabricksGenieAgents#exclude}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.column"></a>

```java
public java.lang.String getColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column DataDatabricksGenieAgents#column}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}.

---

##### `enableEntityMatching`<sup>Optional</sup> <a name="enableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching"></a>

```java
public java.lang.Boolean|IResolvable getEnableEntityMatching();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_entity_matching DataDatabricksGenieAgents#enable_entity_matching}.

---

##### `enableFormatAssistance`<sup>Optional</sup> <a name="enableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance"></a>

```java
public java.lang.Boolean|IResolvable getEnableFormatAssistance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_format_assistance DataDatabricksGenieAgents#enable_format_assistance}.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.exclude"></a>

```java
public java.lang.Boolean|IResolvable getExclude();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#exclude DataDatabricksGenieAgents#exclude}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes;

DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.builder()
    .path(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#path DataDatabricksGenieAgents#path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#path DataDatabricksGenieAgents#path}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions;

DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.builder()
//  .exampleQuestionSqls(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls>)
//  .joinSpecs(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs>)
//  .sqlFunctions(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions>)
//  .sqlSnippets(DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets)
//  .textInstructions(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.exampleQuestionSqls">exampleQuestionSqls</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#example_question_sqls DataDatabricksGenieAgents#example_question_sqls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.joinSpecs">joinSpecs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#join_specs DataDatabricksGenieAgents#join_specs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.sqlFunctions">sqlFunctions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_functions DataDatabricksGenieAgents#sql_functions}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.sqlSnippets">sqlSnippets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_snippets DataDatabricksGenieAgents#sql_snippets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.textInstructions">textInstructions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#text_instructions DataDatabricksGenieAgents#text_instructions}. |

---

##### `exampleQuestionSqls`<sup>Optional</sup> <a name="exampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.exampleQuestionSqls"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls> getExampleQuestionSqls();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#example_question_sqls DataDatabricksGenieAgents#example_question_sqls}.

---

##### `joinSpecs`<sup>Optional</sup> <a name="joinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.joinSpecs"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs> getJoinSpecs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#join_specs DataDatabricksGenieAgents#join_specs}.

---

##### `sqlFunctions`<sup>Optional</sup> <a name="sqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.sqlFunctions"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions> getSqlFunctions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_functions DataDatabricksGenieAgents#sql_functions}.

---

##### `sqlSnippets`<sup>Optional</sup> <a name="sqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.sqlSnippets"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets getSqlSnippets();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_snippets DataDatabricksGenieAgents#sql_snippets}.

---

##### `textInstructions`<sup>Optional</sup> <a name="textInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.textInstructions"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions> getTextInstructions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#text_instructions DataDatabricksGenieAgents#text_instructions}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls;

DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.builder()
    .id(java.lang.String)
    .question(java.lang.String)
    .sql(java.lang.String)
//  .parameters(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters>)
//  .usageGuidance(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.question">question</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.sql">sql</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#parameters DataDatabricksGenieAgents#parameters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.usageGuidance">usageGuidance</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#usage_guidance DataDatabricksGenieAgents#usage_guidance}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.question"></a>

```java
public java.lang.String getQuestion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.sql"></a>

```java
public java.lang.String getSql();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.parameters"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#parameters DataDatabricksGenieAgents#parameters}.

---

##### `usageGuidance`<sup>Optional</sup> <a name="usageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.usageGuidance"></a>

```java
public java.lang.String getUsageGuidance();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#usage_guidance DataDatabricksGenieAgents#usage_guidance}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters;

DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.builder()
    .name(java.lang.String)
//  .defaultValue(DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue)
//  .description(java.lang.String)
//  .typeHint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#default_value DataDatabricksGenieAgents#default_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint">typeHint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#type_hint DataDatabricksGenieAgents#type_hint}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue getDefaultValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#default_value DataDatabricksGenieAgents#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}.

---

##### `typeHint`<sup>Optional</sup> <a name="typeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint"></a>

```java
public java.lang.String getTypeHint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#type_hint DataDatabricksGenieAgents#type_hint}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue;

DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.builder()
//  .valueRange(DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange">valueRange</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#value_range DataDatabricksGenieAgents#value_range}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#values DataDatabricksGenieAgents#values}. |

---

##### `valueRange`<sup>Optional</sup> <a name="valueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange getValueRange();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#value_range DataDatabricksGenieAgents#value_range}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#values DataDatabricksGenieAgents#values}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange;

DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.builder()
//  .max(java.lang.String)
//  .min(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max">max</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#max DataDatabricksGenieAgents#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min">min</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#min DataDatabricksGenieAgents#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max"></a>

```java
public java.lang.String getMax();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#max DataDatabricksGenieAgents#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min"></a>

```java
public java.lang.String getMin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#min DataDatabricksGenieAgents#min}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs;

DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.builder()
    .id(java.lang.String)
    .left(DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft)
    .right(DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight)
    .sql(java.lang.String)
//  .comment(java.lang.String)
//  .instruction(java.lang.String)
//  .relationshipType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.left">left</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#left DataDatabricksGenieAgents#left}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.right">right</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#right DataDatabricksGenieAgents#right}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.sql">sql</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#comment DataDatabricksGenieAgents#comment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.instruction">instruction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.relationshipType">relationshipType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#relationship_type DataDatabricksGenieAgents#relationship_type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.left"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft getLeft();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#left DataDatabricksGenieAgents#left}.

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.right"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight getRight();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#right DataDatabricksGenieAgents#right}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.sql"></a>

```java
public java.lang.String getSql();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#comment DataDatabricksGenieAgents#comment}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.instruction"></a>

```java
public java.lang.String getInstruction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}.

---

##### `relationshipType`<sup>Optional</sup> <a name="relationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.relationshipType"></a>

```java
public java.lang.String getRelationshipType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#relationship_type DataDatabricksGenieAgents#relationship_type}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft;

DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.builder()
    .identifier(java.lang.String)
//  .alias(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.property.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.property.alias">alias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight;

DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.builder()
    .identifier(java.lang.String)
//  .alias(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.property.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.property.alias">alias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions;

DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.builder()
    .id(java.lang.String)
    .identifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.property.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets;

DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.builder()
//  .expressions(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions>)
//  .filters(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters>)
//  .measures(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.expressions">expressions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#expressions DataDatabricksGenieAgents#expressions}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.filters">filters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#filters DataDatabricksGenieAgents#filters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.measures">measures</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#measures DataDatabricksGenieAgents#measures}. |

---

##### `expressions`<sup>Optional</sup> <a name="expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.expressions"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions> getExpressions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#expressions DataDatabricksGenieAgents#expressions}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.filters"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters> getFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#filters DataDatabricksGenieAgents#filters}.

---

##### `measures`<sup>Optional</sup> <a name="measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.measures"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures> getMeasures();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#measures DataDatabricksGenieAgents#measures}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions;

DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.builder()
    .id(java.lang.String)
    .sql(java.lang.String)
//  .alias(java.lang.String)
//  .displayName(java.lang.String)
//  .instruction(java.lang.String)
//  .synonyms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.sql">sql</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.alias">alias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.instruction">instruction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.sql"></a>

```java
public java.lang.String getSql();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.instruction"></a>

```java
public java.lang.String getInstruction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters;

DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.builder()
    .id(java.lang.String)
    .sql(java.lang.String)
//  .displayName(java.lang.String)
//  .instruction(java.lang.String)
//  .synonyms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.sql">sql</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.instruction">instruction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.sql"></a>

```java
public java.lang.String getSql();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.instruction"></a>

```java
public java.lang.String getInstruction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures;

DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.builder()
    .id(java.lang.String)
    .sql(java.lang.String)
//  .alias(java.lang.String)
//  .displayName(java.lang.String)
//  .instruction(java.lang.String)
//  .synonyms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.sql">sql</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.alias">alias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.instruction">instruction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.sql"></a>

```java
public java.lang.String getSql();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.instruction"></a>

```java
public java.lang.String getInstruction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions;

DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.builder()
    .content(java.lang.String)
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksGenieAgentsGenieAgentsProviderConfig <a name="DataDatabricksGenieAgentsGenieAgentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsProviderConfig;

DataDatabricksGenieAgentsGenieAgentsProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}.

---

### DataDatabricksGenieAgentsProviderConfig <a name="DataDatabricksGenieAgentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsProviderConfig;

DataDatabricksGenieAgentsProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.putQuestions">putQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resetQuestions">resetQuestions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQuestions` <a name="putQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.putQuestions"></a>

```java
public void putQuestions(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.putQuestions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>>

---

##### `resetQuestions` <a name="resetQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resetQuestions"></a>

```java
public void resetQuestions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.questions">questions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.questionsInput">questionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `questions`<sup>Required</sup> <a name="questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.questions"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList getQuestions();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList</a>

---

##### `questionsInput`<sup>Optional</sup> <a name="questionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.questionsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions> getQuestionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList;

new DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.get"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList;

new DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.get"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.putAnswer">putAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resetAnswer">resetAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote">resetEvaluationNote</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnswer` <a name="putAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.putAnswer"></a>

```java
public void putAnswer(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.putAnswer.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>>

---

##### `resetAnswer` <a name="resetAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resetAnswer"></a>

```java
public void resetAnswer()
```

##### `resetEvaluationNote` <a name="resetEvaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote"></a>

```java
public void resetEvaluationNote()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.answer">answer</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.answerInput">answerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput">evaluationNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.questionInput">questionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote">evaluationNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.question">question</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `answer`<sup>Required</sup> <a name="answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.answer"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList getAnswer();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList</a>

---

##### `answerInput`<sup>Optional</sup> <a name="answerInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.answerInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer> getAnswerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>>

---

##### `evaluationNoteInput`<sup>Optional</sup> <a name="evaluationNoteInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput"></a>

```java
public java.lang.String getEvaluationNoteInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `questionInput`<sup>Optional</sup> <a name="questionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.questionInput"></a>

```java
public java.lang.String getQuestionInput();
```

- *Type:* java.lang.String

---

##### `evaluationNote`<sup>Required</sup> <a name="evaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote"></a>

```java
public java.lang.String getEvaluationNote();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.question"></a>

```java
public java.lang.String getQuestion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.putSampleQuestions">putSampleQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resetSampleQuestions">resetSampleQuestions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSampleQuestions` <a name="putSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.putSampleQuestions"></a>

```java
public void putSampleQuestions(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.putSampleQuestions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>>

---

##### `resetSampleQuestions` <a name="resetSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resetSampleQuestions"></a>

```java
public void resetSampleQuestions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.sampleQuestions">sampleQuestions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.sampleQuestionsInput">sampleQuestionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sampleQuestions`<sup>Required</sup> <a name="sampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.sampleQuestions"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList getSampleQuestions();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList</a>

---

##### `sampleQuestionsInput`<sup>Optional</sup> <a name="sampleQuestionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.sampleQuestionsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions> getSampleQuestionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList;

new DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.get"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.questionInput">questionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.question">question</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `questionInput`<sup>Optional</sup> <a name="questionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.questionInput"></a>

```java
public java.lang.String getQuestionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.question"></a>

```java
public java.lang.String getQuestion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList;

new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.get"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput">mcpConnectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection">mcpConnection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mcpConnectionInput`<sup>Optional</sup> <a name="mcpConnectionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput"></a>

```java
public java.lang.String getMcpConnectionInput();
```

- *Type:* java.lang.String

---

##### `mcpConnection`<sup>Required</sup> <a name="mcpConnection" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection"></a>

```java
public java.lang.String getMcpConnection();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putMcpConnections">putMcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putTables">putTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetMcpConnections">resetMcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetTables">resetTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMcpConnections` <a name="putMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putMcpConnections"></a>

```java
public void putMcpConnections(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putMcpConnections.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>>

---

##### `putTables` <a name="putTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putTables"></a>

```java
public void putTables(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putTables.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>>

---

##### `putVolumes` <a name="putVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putVolumes"></a>

```java
public void putVolumes(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putVolumes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>>

---

##### `resetMcpConnections` <a name="resetMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetMcpConnections"></a>

```java
public void resetMcpConnections()
```

##### `resetTables` <a name="resetTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetTables"></a>

```java
public void resetTables()
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetVolumes"></a>

```java
public void resetVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.mcpConnections">mcpConnections</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.tables">tables</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.mcpConnectionsInput">mcpConnectionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.tablesInput">tablesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.volumesInput">volumesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mcpConnections`<sup>Required</sup> <a name="mcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.mcpConnections"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList getMcpConnections();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList</a>

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.tables"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList getTables();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.volumes"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList getVolumes();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList</a>

---

##### `mcpConnectionsInput`<sup>Optional</sup> <a name="mcpConnectionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.mcpConnectionsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections> getMcpConnectionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>>

---

##### `tablesInput`<sup>Optional</sup> <a name="tablesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.tablesInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables> getTablesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>>

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.volumesInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes> getVolumesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList;

new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.get"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching">resetEnableEntityMatching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance">resetEnableFormatAssistance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnableEntityMatching` <a name="resetEnableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching"></a>

```java
public void resetEnableEntityMatching()
```

##### `resetEnableFormatAssistance` <a name="resetEnableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance"></a>

```java
public void resetEnableFormatAssistance()
```

##### `resetExclude` <a name="resetExclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude"></a>

```java
public void resetExclude()
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms"></a>

```java
public void resetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput">columnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput">enableEntityMatchingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput">enableFormatAssistanceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput">excludeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column">column</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching">enableEntityMatching</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance">enableFormatAssistance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude">exclude</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput"></a>

```java
public java.lang.String getColumnInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enableEntityMatchingInput`<sup>Optional</sup> <a name="enableEntityMatchingInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableEntityMatchingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableFormatAssistanceInput`<sup>Optional</sup> <a name="enableFormatAssistanceInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableFormatAssistanceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput"></a>

```java
public java.lang.Boolean|IResolvable getExcludeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput"></a>

```java
public java.util.List<java.lang.String> getSynonymsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column"></a>

```java
public java.lang.String getColumn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enableEntityMatching`<sup>Required</sup> <a name="enableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching"></a>

```java
public java.lang.Boolean|IResolvable getEnableEntityMatching();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableFormatAssistance`<sup>Required</sup> <a name="enableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance"></a>

```java
public java.lang.Boolean|IResolvable getEnableFormatAssistance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude"></a>

```java
public java.lang.Boolean|IResolvable getExclude();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList;

new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.get"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.putColumnConfigs">putColumnConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resetColumnConfigs">resetColumnConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnConfigs` <a name="putColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.putColumnConfigs"></a>

```java
public void putColumnConfigs(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.putColumnConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>>

---

##### `resetColumnConfigs` <a name="resetColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resetColumnConfigs"></a>

```java
public void resetColumnConfigs()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.columnConfigs">columnConfigs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput">columnConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnConfigs`<sup>Required</sup> <a name="columnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.columnConfigs"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList getColumnConfigs();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList</a>

---

##### `columnConfigsInput`<sup>Optional</sup> <a name="columnConfigsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs> getColumnConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList;

new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.get"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.get"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance">resetUsageGuidance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters"></a>

```java
public void putParameters(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>>

---

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetUsageGuidance` <a name="resetUsageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance"></a>

```java
public void resetUsageGuidance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput">questionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput">sqlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput">usageGuidanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question">question</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql">sql</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance">usageGuidance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>>

---

##### `questionInput`<sup>Optional</sup> <a name="questionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput"></a>

```java
public java.lang.String getQuestionInput();
```

- *Type:* java.lang.String

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput"></a>

```java
public java.lang.String getSqlInput();
```

- *Type:* java.lang.String

---

##### `usageGuidanceInput`<sup>Optional</sup> <a name="usageGuidanceInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput"></a>

```java
public java.lang.String getUsageGuidanceInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question"></a>

```java
public java.lang.String getQuestion();
```

- *Type:* java.lang.String

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql"></a>

```java
public java.lang.String getSql();
```

- *Type:* java.lang.String

---

##### `usageGuidance`<sup>Required</sup> <a name="usageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance"></a>

```java
public java.lang.String getUsageGuidance();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange">putValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange">resetValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueRange` <a name="putValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange"></a>

```java
public void putValueRange(DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---

##### `resetValueRange` <a name="resetValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange"></a>

```java
public void resetValueRange()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange">valueRange</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput">valueRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueRange`<sup>Required</sup> <a name="valueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference getValueRange();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a>

---

##### `valueRangeInput`<sup>Optional</sup> <a name="valueRangeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange getValueRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max">max</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min">min</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput"></a>

```java
public java.lang.String getMaxInput();
```

- *Type:* java.lang.String

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput"></a>

```java
public java.lang.String getMinInput();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max"></a>

```java
public java.lang.String getMax();
```

- *Type:* java.lang.String

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min"></a>

```java
public java.lang.String getMin();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.get"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue">putDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint">resetTypeHint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultValue` <a name="putDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue"></a>

```java
public void putDefaultValue(DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTypeHint` <a name="resetTypeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint"></a>

```java
public void resetTypeHint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput">typeHintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint">typeHint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference getDefaultValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue getDefaultValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeHintInput`<sup>Optional</sup> <a name="typeHintInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput"></a>

```java
public java.lang.String getTypeHintInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `typeHint`<sup>Required</sup> <a name="typeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint"></a>

```java
public java.lang.String getTypeHint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias">resetAlias</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias"></a>

```java
public void resetAlias()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.get"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putLeft">putLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putRight">putRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType">resetRelationshipType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLeft` <a name="putLeft" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putLeft"></a>

```java
public void putLeft(DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putLeft.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a>

---

##### `putRight` <a name="putRight" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putRight"></a>

```java
public void putRight(DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putRight.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetInstruction"></a>

```java
public void resetInstruction()
```

##### `resetRelationshipType` <a name="resetRelationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType"></a>

```java
public void resetRelationshipType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.left">left</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.right">right</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput">instructionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.leftInput">leftInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput">relationshipTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.rightInput">rightInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput">sqlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.instruction">instruction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType">relationshipType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.sql">sql</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.left"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference getLeft();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference</a>

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.right"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference getRight();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput"></a>

```java
public java.lang.String getInstructionInput();
```

- *Type:* java.lang.String

---

##### `leftInput`<sup>Optional</sup> <a name="leftInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.leftInput"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft getLeftInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a>

---

##### `relationshipTypeInput`<sup>Optional</sup> <a name="relationshipTypeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput"></a>

```java
public java.lang.String getRelationshipTypeInput();
```

- *Type:* java.lang.String

---

##### `rightInput`<sup>Optional</sup> <a name="rightInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.rightInput"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight getRightInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a>

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput"></a>

```java
public java.lang.String getSqlInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.instruction"></a>

```java
public java.lang.String getInstruction();
```

- *Type:* java.lang.String

---

##### `relationshipType`<sup>Required</sup> <a name="relationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType"></a>

```java
public java.lang.String getRelationshipType();
```

- *Type:* java.lang.String

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.sql"></a>

```java
public java.lang.String getSql();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias">resetAlias</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias"></a>

```java
public void resetAlias()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putExampleQuestionSqls">putExampleQuestionSqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putJoinSpecs">putJoinSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlFunctions">putSqlFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlSnippets">putSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putTextInstructions">putTextInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetExampleQuestionSqls">resetExampleQuestionSqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetJoinSpecs">resetJoinSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetSqlFunctions">resetSqlFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetSqlSnippets">resetSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetTextInstructions">resetTextInstructions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExampleQuestionSqls` <a name="putExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putExampleQuestionSqls"></a>

```java
public void putExampleQuestionSqls(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putExampleQuestionSqls.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>>

---

##### `putJoinSpecs` <a name="putJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putJoinSpecs"></a>

```java
public void putJoinSpecs(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putJoinSpecs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>>

---

##### `putSqlFunctions` <a name="putSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlFunctions"></a>

```java
public void putSqlFunctions(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlFunctions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>>

---

##### `putSqlSnippets` <a name="putSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlSnippets"></a>

```java
public void putSqlSnippets(DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlSnippets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a>

---

##### `putTextInstructions` <a name="putTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putTextInstructions"></a>

```java
public void putTextInstructions(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putTextInstructions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>>

---

##### `resetExampleQuestionSqls` <a name="resetExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetExampleQuestionSqls"></a>

```java
public void resetExampleQuestionSqls()
```

##### `resetJoinSpecs` <a name="resetJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetJoinSpecs"></a>

```java
public void resetJoinSpecs()
```

##### `resetSqlFunctions` <a name="resetSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetSqlFunctions"></a>

```java
public void resetSqlFunctions()
```

##### `resetSqlSnippets` <a name="resetSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetSqlSnippets"></a>

```java
public void resetSqlSnippets()
```

##### `resetTextInstructions` <a name="resetTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetTextInstructions"></a>

```java
public void resetTextInstructions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.exampleQuestionSqls">exampleQuestionSqls</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.joinSpecs">joinSpecs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlFunctions">sqlFunctions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlSnippets">sqlSnippets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.textInstructions">textInstructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput">exampleQuestionSqlsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.joinSpecsInput">joinSpecsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlFunctionsInput">sqlFunctionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlSnippetsInput">sqlSnippetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.textInstructionsInput">textInstructionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exampleQuestionSqls`<sup>Required</sup> <a name="exampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.exampleQuestionSqls"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList getExampleQuestionSqls();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList</a>

---

##### `joinSpecs`<sup>Required</sup> <a name="joinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.joinSpecs"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList getJoinSpecs();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList</a>

---

##### `sqlFunctions`<sup>Required</sup> <a name="sqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlFunctions"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList getSqlFunctions();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList</a>

---

##### `sqlSnippets`<sup>Required</sup> <a name="sqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlSnippets"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference getSqlSnippets();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference</a>

---

##### `textInstructions`<sup>Required</sup> <a name="textInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.textInstructions"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList getTextInstructions();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList</a>

---

##### `exampleQuestionSqlsInput`<sup>Optional</sup> <a name="exampleQuestionSqlsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls> getExampleQuestionSqlsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>>

---

##### `joinSpecsInput`<sup>Optional</sup> <a name="joinSpecsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.joinSpecsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs> getJoinSpecsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>>

---

##### `sqlFunctionsInput`<sup>Optional</sup> <a name="sqlFunctionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlFunctionsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions> getSqlFunctionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>>

---

##### `sqlSnippetsInput`<sup>Optional</sup> <a name="sqlSnippetsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlSnippetsInput"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets getSqlSnippetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a>

---

##### `textInstructionsInput`<sup>Optional</sup> <a name="textInstructionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.textInstructionsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions> getTextInstructionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.get"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.get"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction"></a>

```java
public void resetInstruction()
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms"></a>

```java
public void resetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput">instructionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput">sqlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction">instruction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql">sql</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput"></a>

```java
public java.lang.String getInstructionInput();
```

- *Type:* java.lang.String

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput"></a>

```java
public java.lang.String getSqlInput();
```

- *Type:* java.lang.String

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput"></a>

```java
public java.util.List<java.lang.String> getSynonymsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction"></a>

```java
public java.lang.String getInstruction();
```

- *Type:* java.lang.String

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql"></a>

```java
public java.lang.String getSql();
```

- *Type:* java.lang.String

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.get"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction"></a>

```java
public void resetInstruction()
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms"></a>

```java
public void resetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput">instructionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput">sqlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction">instruction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql">sql</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput"></a>

```java
public java.lang.String getInstructionInput();
```

- *Type:* java.lang.String

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput"></a>

```java
public java.lang.String getSqlInput();
```

- *Type:* java.lang.String

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput"></a>

```java
public java.util.List<java.lang.String> getSynonymsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction"></a>

```java
public java.lang.String getInstruction();
```

- *Type:* java.lang.String

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql"></a>

```java
public java.lang.String getSql();
```

- *Type:* java.lang.String

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.get"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction"></a>

```java
public void resetInstruction()
```

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms"></a>

```java
public void resetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput">instructionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput">sqlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction">instruction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql">sql</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms">synonyms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput"></a>

```java
public java.lang.String getInstructionInput();
```

- *Type:* java.lang.String

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput"></a>

```java
public java.lang.String getSqlInput();
```

- *Type:* java.lang.String

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput"></a>

```java
public java.util.List<java.lang.String> getSynonymsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction"></a>

```java
public java.lang.String getInstruction();
```

- *Type:* java.lang.String

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql"></a>

```java
public java.lang.String getSql();
```

- *Type:* java.lang.String

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms"></a>

```java
public java.util.List<java.lang.String> getSynonyms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putExpressions">putExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putMeasures">putMeasures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions">resetExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures">resetMeasures</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpressions` <a name="putExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putExpressions"></a>

```java
public void putExpressions(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putExpressions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>>

---

##### `putFilters` <a name="putFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putFilters"></a>

```java
public void putFilters(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>>

---

##### `putMeasures` <a name="putMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putMeasures"></a>

```java
public void putMeasures(IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putMeasures.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>>

---

##### `resetExpressions` <a name="resetExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions"></a>

```java
public void resetExpressions()
```

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetFilters"></a>

```java
public void resetFilters()
```

##### `resetMeasures` <a name="resetMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures"></a>

```java
public void resetMeasures()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.expressions">expressions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.measures">measures</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput">expressionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput">filtersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput">measuresInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressions`<sup>Required</sup> <a name="expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.expressions"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList getExpressions();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.filters"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList getFilters();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList</a>

---

##### `measures`<sup>Required</sup> <a name="measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.measures"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList getMeasures();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList</a>

---

##### `expressionsInput`<sup>Optional</sup> <a name="expressionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions> getExpressionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>>

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters> getFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>>

---

##### `measuresInput`<sup>Optional</sup> <a name="measuresInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures> getMeasuresInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.get"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference;

new DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putBenchmarks">putBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putDataSources">putDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putInstructions">putInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetBenchmarks">resetBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetDataSources">resetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetInstructions">resetInstructions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBenchmarks` <a name="putBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putBenchmarks"></a>

```java
public void putBenchmarks(DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putBenchmarks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a>

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putConfig"></a>

```java
public void putConfig(DataDatabricksGenieAgentsGenieAgentsDefinitionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a>

---

##### `putDataSources` <a name="putDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putDataSources"></a>

```java
public void putDataSources(DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putDataSources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a>

---

##### `putInstructions` <a name="putInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putInstructions"></a>

```java
public void putInstructions(DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putInstructions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a>

---

##### `resetBenchmarks` <a name="resetBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetBenchmarks"></a>

```java
public void resetBenchmarks()
```

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetDataSources` <a name="resetDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetDataSources"></a>

```java
public void resetDataSources()
```

##### `resetInstructions` <a name="resetInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetInstructions"></a>

```java
public void resetInstructions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.benchmarks">benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.instructions">instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.benchmarksInput">benchmarksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.configInput">configInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.dataSourcesInput">dataSourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.instructionsInput">instructionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition">DataDatabricksGenieAgentsGenieAgentsDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `benchmarks`<sup>Required</sup> <a name="benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.benchmarks"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference getBenchmarks();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.config"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference</a>

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.dataSources"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference getDataSources();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference</a>

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.instructions"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference getInstructions();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference</a>

---

##### `benchmarksInput`<sup>Optional</sup> <a name="benchmarksInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.benchmarksInput"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks getBenchmarksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.configInput"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionConfig getConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a>

---

##### `dataSourcesInput`<sup>Optional</sup> <a name="dataSourcesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.dataSourcesInput"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources getDataSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a>

---

##### `instructionsInput`<sup>Optional</sup> <a name="instructionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.instructionsInput"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions getInstructionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.internalValue"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition">DataDatabricksGenieAgentsGenieAgentsDefinition</a>

---


### DataDatabricksGenieAgentsGenieAgentsList <a name="DataDatabricksGenieAgentsGenieAgentsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsList;

new DataDatabricksGenieAgentsGenieAgentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.get"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents">DataDatabricksGenieAgentsGenieAgents</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksGenieAgentsGenieAgents> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents">DataDatabricksGenieAgentsGenieAgents</a>>

---


### DataDatabricksGenieAgentsGenieAgentsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsOutputReference;

new DataDatabricksGenieAgentsGenieAgentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksGenieAgentsGenieAgentsProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.effectiveParentPath">effectiveParentPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.parentPath">parentPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference">DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents">DataDatabricksGenieAgentsGenieAgents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.definition"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference getDefinition();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `effectiveParentPath`<sup>Required</sup> <a name="effectiveParentPath" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.effectiveParentPath"></a>

```java
public java.lang.String getEffectiveParentPath();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `parentPath`<sup>Required</sup> <a name="parentPath" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.parentPath"></a>

```java
public java.lang.String getParentPath();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.providerConfig"></a>

```java
public DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference">DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.internalValue"></a>

```java
public DataDatabricksGenieAgentsGenieAgents getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents">DataDatabricksGenieAgentsGenieAgents</a>

---


### DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference;

new DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsGenieAgentsProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a>

---


### DataDatabricksGenieAgentsProviderConfigOutputReference <a name="DataDatabricksGenieAgentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_genie_agents.DataDatabricksGenieAgentsProviderConfigOutputReference;

new DataDatabricksGenieAgentsProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksGenieAgentsProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a>

---



