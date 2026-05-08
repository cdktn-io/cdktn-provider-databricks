# `dataDatabricksEnvironmentsWorkspaceBaseEnvironments` Submodule <a name="`dataDatabricksEnvironmentsWorkspaceBaseEnvironments` Submodule" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironments <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments databricks_environments_workspace_base_environments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_environments_workspace_base_environments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments;

DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments#page_size DataDatabricksEnvironmentsWorkspaceBaseEnvironments#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.pageSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments#page_size DataDatabricksEnvironmentsWorkspaceBaseEnvironments#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetPageSize"></a>

```java
public void resetPageSize()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksEnvironmentsWorkspaceBaseEnvironments resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_environments_workspace_base_environments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments;

DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_environments_workspace_base_environments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments;

DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_environments_workspace_base_environments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments;

DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_environments_workspace_base_environments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments;

DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksEnvironmentsWorkspaceBaseEnvironments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksEnvironmentsWorkspaceBaseEnvironments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksEnvironmentsWorkspaceBaseEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksEnvironmentsWorkspaceBaseEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.workspaceBaseEnvironments">workspaceBaseEnvironments</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.pageSizeInput">pageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.providerConfig"></a>

```java
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference</a>

---

##### `workspaceBaseEnvironments`<sup>Required</sup> <a name="workspaceBaseEnvironments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.workspaceBaseEnvironments"></a>

```java
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList getWorkspaceBaseEnvironments();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.pageSizeInput"></a>

```java
public java.lang.Number getPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_environments_workspace_base_environments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig;

DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .pageSize(java.lang.Number)
//  .providerConfig(DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments#page_size DataDatabricksEnvironmentsWorkspaceBaseEnvironments#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments#page_size DataDatabricksEnvironmentsWorkspaceBaseEnvironments#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.providerConfig"></a>

```java
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_environments_workspace_base_environments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig;

DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.builder()
    .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_environments_workspace_base_environments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments;

DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.builder()
    .name(java.lang.String)
//  .providerConfig(DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments#name DataDatabricksEnvironmentsWorkspaceBaseEnvironments#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments#name DataDatabricksEnvironmentsWorkspaceBaseEnvironments#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.property.providerConfig"></a>

```java
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_environments_workspace_base_environments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig;

DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.builder()
    .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_environments_workspace_base_environments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---


### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_environments_workspace_base_environments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.get"></a>

```java
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments</a>>

---


### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_environments_workspace_base_environments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.baseEnvironmentType">baseEnvironmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.creatorUserId">creatorUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.effectiveBaseEnvironmentType">effectiveBaseEnvironmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.filepath">filepath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.isDefault">isDefault</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.lastUpdatedUserId">lastUpdatedUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseEnvironmentType`<sup>Required</sup> <a name="baseEnvironmentType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.baseEnvironmentType"></a>

```java
public java.lang.String getBaseEnvironmentType();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creatorUserId`<sup>Required</sup> <a name="creatorUserId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.creatorUserId"></a>

```java
public java.lang.String getCreatorUserId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `effectiveBaseEnvironmentType`<sup>Required</sup> <a name="effectiveBaseEnvironmentType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.effectiveBaseEnvironmentType"></a>

```java
public java.lang.String getEffectiveBaseEnvironmentType();
```

- *Type:* java.lang.String

---

##### `filepath`<sup>Required</sup> <a name="filepath" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.filepath"></a>

```java
public java.lang.String getFilepath();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.isDefault"></a>

```java
public IResolvable getIsDefault();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `lastUpdatedUserId`<sup>Required</sup> <a name="lastUpdatedUserId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.lastUpdatedUserId"></a>

```java
public java.lang.String getLastUpdatedUserId();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.providerConfig"></a>

```java
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.internalValue"></a>

```java
public DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments</a>

---


### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_environments_workspace_base_environments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference;

new DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---



