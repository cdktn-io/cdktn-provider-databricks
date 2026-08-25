# `dataDatabricksSupervisorAgentTools` Submodule <a name="`dataDatabricksSupervisorAgentTools` Submodule" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSupervisorAgentTools <a name="DataDatabricksSupervisorAgentTools" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools databricks_supervisor_agent_tools}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentTools;

DataDatabricksSupervisorAgentTools.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksSupervisorAgentToolsProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#parent DataDatabricksSupervisorAgentTools#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#page_size DataDatabricksSupervisorAgentTools#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#provider_config DataDatabricksSupervisorAgentTools#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#parent DataDatabricksSupervisorAgentTools#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.pageSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#page_size DataDatabricksSupervisorAgentTools#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#provider_config DataDatabricksSupervisorAgentTools#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksSupervisorAgentToolsProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetPageSize"></a>

```java
public void resetPageSize()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksSupervisorAgentTools resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentTools;

DataDatabricksSupervisorAgentTools.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentTools;

DataDatabricksSupervisorAgentTools.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentTools;

DataDatabricksSupervisorAgentTools.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentTools;

DataDatabricksSupervisorAgentTools.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksSupervisorAgentTools.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksSupervisorAgentTools resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksSupervisorAgentTools to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksSupervisorAgentTools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksSupervisorAgentTools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference">DataDatabricksSupervisorAgentToolsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.tools">tools</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList">DataDatabricksSupervisorAgentToolsToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.pageSizeInput">pageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.providerConfig"></a>

```java
public DataDatabricksSupervisorAgentToolsProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference">DataDatabricksSupervisorAgentToolsProviderConfigOutputReference</a>

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.tools"></a>

```java
public DataDatabricksSupervisorAgentToolsToolsList getTools();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList">DataDatabricksSupervisorAgentToolsToolsList</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.pageSizeInput"></a>

```java
public java.lang.Number getPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksSupervisorAgentToolsProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSupervisorAgentToolsConfig <a name="DataDatabricksSupervisorAgentToolsConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsConfig;

DataDatabricksSupervisorAgentToolsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksSupervisorAgentToolsProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#parent DataDatabricksSupervisorAgentTools#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#page_size DataDatabricksSupervisorAgentTools#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#provider_config DataDatabricksSupervisorAgentTools#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#parent DataDatabricksSupervisorAgentTools#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#page_size DataDatabricksSupervisorAgentTools#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.providerConfig"></a>

```java
public DataDatabricksSupervisorAgentToolsProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#provider_config DataDatabricksSupervisorAgentTools#provider_config}.

---

### DataDatabricksSupervisorAgentToolsProviderConfig <a name="DataDatabricksSupervisorAgentToolsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsProviderConfig;

DataDatabricksSupervisorAgentToolsProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#workspace_id DataDatabricksSupervisorAgentTools#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#workspace_id DataDatabricksSupervisorAgentTools#workspace_id}.

---

### DataDatabricksSupervisorAgentToolsTools <a name="DataDatabricksSupervisorAgentToolsTools" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsTools;

DataDatabricksSupervisorAgentToolsTools.builder()
    .name(java.lang.String)
//  .providerConfig(DataDatabricksSupervisorAgentToolsToolsProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#provider_config DataDatabricksSupervisorAgentTools#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools.property.providerConfig"></a>

```java
public DataDatabricksSupervisorAgentToolsToolsProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#provider_config DataDatabricksSupervisorAgentTools#provider_config}.

---

### DataDatabricksSupervisorAgentToolsToolsApp <a name="DataDatabricksSupervisorAgentToolsToolsApp" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsToolsApp;

DataDatabricksSupervisorAgentToolsToolsApp.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}.

---

### DataDatabricksSupervisorAgentToolsToolsGenieSpace <a name="DataDatabricksSupervisorAgentToolsToolsGenieSpace" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsToolsGenieSpace;

DataDatabricksSupervisorAgentToolsToolsGenieSpace.builder()
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#id DataDatabricksSupervisorAgentTools#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#id DataDatabricksSupervisorAgentTools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant <a name="DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant;

DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant.builder()
    .knowledgeAssistantId(java.lang.String)
//  .servingEndpointName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant.property.knowledgeAssistantId">knowledgeAssistantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#knowledge_assistant_id DataDatabricksSupervisorAgentTools#knowledge_assistant_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant.property.servingEndpointName">servingEndpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#serving_endpoint_name DataDatabricksSupervisorAgentTools#serving_endpoint_name}. |

---

##### `knowledgeAssistantId`<sup>Required</sup> <a name="knowledgeAssistantId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant.property.knowledgeAssistantId"></a>

```java
public java.lang.String getKnowledgeAssistantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#knowledge_assistant_id DataDatabricksSupervisorAgentTools#knowledge_assistant_id}.

---

##### `servingEndpointName`<sup>Optional</sup> <a name="servingEndpointName" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant.property.servingEndpointName"></a>

```java
public java.lang.String getServingEndpointName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#serving_endpoint_name DataDatabricksSupervisorAgentTools#serving_endpoint_name}.

---

### DataDatabricksSupervisorAgentToolsToolsProviderConfig <a name="DataDatabricksSupervisorAgentToolsToolsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsToolsProviderConfig;

DataDatabricksSupervisorAgentToolsToolsProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#workspace_id DataDatabricksSupervisorAgentTools#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#workspace_id DataDatabricksSupervisorAgentTools#workspace_id}.

---

### DataDatabricksSupervisorAgentToolsToolsUcConnection <a name="DataDatabricksSupervisorAgentToolsToolsUcConnection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsToolsUcConnection;

DataDatabricksSupervisorAgentToolsToolsUcConnection.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}.

---

### DataDatabricksSupervisorAgentToolsToolsUcFunction <a name="DataDatabricksSupervisorAgentToolsToolsUcFunction" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsToolsUcFunction;

DataDatabricksSupervisorAgentToolsToolsUcFunction.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}.

---

### DataDatabricksSupervisorAgentToolsToolsVolume <a name="DataDatabricksSupervisorAgentToolsToolsVolume" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsToolsVolume;

DataDatabricksSupervisorAgentToolsToolsVolume.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSupervisorAgentToolsProviderConfigOutputReference <a name="DataDatabricksSupervisorAgentToolsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference;

new DataDatabricksSupervisorAgentToolsProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksSupervisorAgentToolsProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a>

---


### DataDatabricksSupervisorAgentToolsToolsAppOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference;

new DataDatabricksSupervisorAgentToolsToolsAppOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp">DataDatabricksSupervisorAgentToolsToolsApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.internalValue"></a>

```java
public DataDatabricksSupervisorAgentToolsToolsApp getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp">DataDatabricksSupervisorAgentToolsToolsApp</a>

---


### DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference;

new DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace">DataDatabricksSupervisorAgentToolsToolsGenieSpace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.internalValue"></a>

```java
public DataDatabricksSupervisorAgentToolsToolsGenieSpace getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace">DataDatabricksSupervisorAgentToolsToolsGenieSpace</a>

---


### DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference;

new DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.resetServingEndpointName">resetServingEndpointName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServingEndpointName` <a name="resetServingEndpointName" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.resetServingEndpointName"></a>

```java
public void resetServingEndpointName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput">knowledgeAssistantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.servingEndpointNameInput">servingEndpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.knowledgeAssistantId">knowledgeAssistantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.servingEndpointName">servingEndpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant">DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `knowledgeAssistantIdInput`<sup>Optional</sup> <a name="knowledgeAssistantIdInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput"></a>

```java
public java.lang.String getKnowledgeAssistantIdInput();
```

- *Type:* java.lang.String

---

##### `servingEndpointNameInput`<sup>Optional</sup> <a name="servingEndpointNameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.servingEndpointNameInput"></a>

```java
public java.lang.String getServingEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `knowledgeAssistantId`<sup>Required</sup> <a name="knowledgeAssistantId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.knowledgeAssistantId"></a>

```java
public java.lang.String getKnowledgeAssistantId();
```

- *Type:* java.lang.String

---

##### `servingEndpointName`<sup>Required</sup> <a name="servingEndpointName" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.servingEndpointName"></a>

```java
public java.lang.String getServingEndpointName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.internalValue"></a>

```java
public DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant">DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant</a>

---


### DataDatabricksSupervisorAgentToolsToolsList <a name="DataDatabricksSupervisorAgentToolsToolsList" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsToolsList;

new DataDatabricksSupervisorAgentToolsToolsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.get"></a>

```java
public DataDatabricksSupervisorAgentToolsToolsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools">DataDatabricksSupervisorAgentToolsTools</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksSupervisorAgentToolsTools> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools">DataDatabricksSupervisorAgentToolsTools</a>>

---


### DataDatabricksSupervisorAgentToolsToolsOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsToolsOutputReference;

new DataDatabricksSupervisorAgentToolsToolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksSupervisorAgentToolsToolsProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference">DataDatabricksSupervisorAgentToolsToolsAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.genieSpace">genieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference">DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.knowledgeAssistant">knowledgeAssistant</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference">DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference">DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.toolId">toolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.toolType">toolType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.ucConnection">ucConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference">DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.ucFunction">ucFunction</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference">DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference">DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools">DataDatabricksSupervisorAgentToolsTools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.app"></a>

```java
public DataDatabricksSupervisorAgentToolsToolsAppOutputReference getApp();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference">DataDatabricksSupervisorAgentToolsToolsAppOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `genieSpace`<sup>Required</sup> <a name="genieSpace" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.genieSpace"></a>

```java
public DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference getGenieSpace();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference">DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `knowledgeAssistant`<sup>Required</sup> <a name="knowledgeAssistant" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.knowledgeAssistant"></a>

```java
public DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference getKnowledgeAssistant();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference">DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.providerConfig"></a>

```java
public DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference">DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference</a>

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.toolId"></a>

```java
public java.lang.String getToolId();
```

- *Type:* java.lang.String

---

##### `toolType`<sup>Required</sup> <a name="toolType" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.toolType"></a>

```java
public java.lang.String getToolType();
```

- *Type:* java.lang.String

---

##### `ucConnection`<sup>Required</sup> <a name="ucConnection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.ucConnection"></a>

```java
public DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference getUcConnection();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference">DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference</a>

---

##### `ucFunction`<sup>Required</sup> <a name="ucFunction" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.ucFunction"></a>

```java
public DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference getUcFunction();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference">DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.volume"></a>

```java
public DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference getVolume();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference">DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksSupervisorAgentToolsToolsProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.internalValue"></a>

```java
public DataDatabricksSupervisorAgentToolsTools getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools">DataDatabricksSupervisorAgentToolsTools</a>

---


### DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference;

new DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksSupervisorAgentToolsToolsProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a>

---


### DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference;

new DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection">DataDatabricksSupervisorAgentToolsToolsUcConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.internalValue"></a>

```java
public DataDatabricksSupervisorAgentToolsToolsUcConnection getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection">DataDatabricksSupervisorAgentToolsToolsUcConnection</a>

---


### DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference;

new DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction">DataDatabricksSupervisorAgentToolsToolsUcFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.internalValue"></a>

```java
public DataDatabricksSupervisorAgentToolsToolsUcFunction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction">DataDatabricksSupervisorAgentToolsToolsUcFunction</a>

---


### DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_supervisor_agent_tools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference;

new DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume">DataDatabricksSupervisorAgentToolsToolsVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.internalValue"></a>

```java
public DataDatabricksSupervisorAgentToolsToolsVolume getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume">DataDatabricksSupervisorAgentToolsToolsVolume</a>

---



