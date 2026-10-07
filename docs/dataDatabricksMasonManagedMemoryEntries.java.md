# `dataDatabricksMasonManagedMemoryEntries` Submodule <a name="`dataDatabricksMasonManagedMemoryEntries` Submodule" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMasonManagedMemoryEntries <a name="DataDatabricksMasonManagedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries databricks_mason_managed_memory_entries}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mason_managed_memory_entries.DataDatabricksMasonManagedMemoryEntries;

DataDatabricksMasonManagedMemoryEntries.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actorId(java.lang.String)
    .parent(java.lang.String)
//  .pageSize(java.lang.Number)
//  .pathPrefix(java.lang.String)
//  .providerConfig(DataDatabricksMasonManagedMemoryEntriesProviderConfig)
//  .readMask(java.lang.String)
//  .sessionId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.actorId">actorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#actor_id DataDatabricksMasonManagedMemoryEntries#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#parent DataDatabricksMasonManagedMemoryEntries#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#page_size DataDatabricksMasonManagedMemoryEntries#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.pathPrefix">pathPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#path_prefix DataDatabricksMasonManagedMemoryEntries#path_prefix}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.readMask">readMask</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#read_mask DataDatabricksMasonManagedMemoryEntries#read_mask}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.sessionId">sessionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#session_id DataDatabricksMasonManagedMemoryEntries#session_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.actorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#actor_id DataDatabricksMasonManagedMemoryEntries#actor_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#parent DataDatabricksMasonManagedMemoryEntries#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.pageSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#page_size DataDatabricksMasonManagedMemoryEntries#page_size}.

---

##### `pathPrefix`<sup>Optional</sup> <a name="pathPrefix" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.pathPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#path_prefix DataDatabricksMasonManagedMemoryEntries#path_prefix}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}.

---

##### `readMask`<sup>Optional</sup> <a name="readMask" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.readMask"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#read_mask DataDatabricksMasonManagedMemoryEntries#read_mask}.

---

##### `sessionId`<sup>Optional</sup> <a name="sessionId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.sessionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#session_id DataDatabricksMasonManagedMemoryEntries#session_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetPathPrefix">resetPathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetReadMask">resetReadMask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetSessionId">resetSessionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksMasonManagedMemoryEntriesProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetPageSize"></a>

```java
public void resetPageSize()
```

##### `resetPathPrefix` <a name="resetPathPrefix" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetPathPrefix"></a>

```java
public void resetPathPrefix()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetReadMask` <a name="resetReadMask" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetReadMask"></a>

```java
public void resetReadMask()
```

##### `resetSessionId` <a name="resetSessionId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetSessionId"></a>

```java
public void resetSessionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryEntries resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mason_managed_memory_entries.DataDatabricksMasonManagedMemoryEntries;

DataDatabricksMasonManagedMemoryEntries.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mason_managed_memory_entries.DataDatabricksMasonManagedMemoryEntries;

DataDatabricksMasonManagedMemoryEntries.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mason_managed_memory_entries.DataDatabricksMasonManagedMemoryEntries;

DataDatabricksMasonManagedMemoryEntries.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mason_managed_memory_entries.DataDatabricksMasonManagedMemoryEntries;

DataDatabricksMasonManagedMemoryEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksMasonManagedMemoryEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryEntries resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksMasonManagedMemoryEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksMasonManagedMemoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMasonManagedMemoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.managedMemoryEntries">managedMemoryEntries</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.actorIdInput">actorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pageSizeInput">pageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pathPrefixInput">pathPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.readMaskInput">readMaskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.sessionIdInput">sessionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.actorId">actorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pathPrefix">pathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.readMask">readMask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.sessionId">sessionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `managedMemoryEntries`<sup>Required</sup> <a name="managedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.managedMemoryEntries"></a>

```java
public DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList getManagedMemoryEntries();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.providerConfig"></a>

```java
public DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference</a>

---

##### `actorIdInput`<sup>Optional</sup> <a name="actorIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.actorIdInput"></a>

```java
public java.lang.String getActorIdInput();
```

- *Type:* java.lang.String

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pageSizeInput"></a>

```java
public java.lang.Number getPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `pathPrefixInput`<sup>Optional</sup> <a name="pathPrefixInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pathPrefixInput"></a>

```java
public java.lang.String getPathPrefixInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksMasonManagedMemoryEntriesProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a>

---

##### `readMaskInput`<sup>Optional</sup> <a name="readMaskInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.readMaskInput"></a>

```java
public java.lang.String getReadMaskInput();
```

- *Type:* java.lang.String

---

##### `sessionIdInput`<sup>Optional</sup> <a name="sessionIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.sessionIdInput"></a>

```java
public java.lang.String getSessionIdInput();
```

- *Type:* java.lang.String

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.actorId"></a>

```java
public java.lang.String getActorId();
```

- *Type:* java.lang.String

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pathPrefix"></a>

```java
public java.lang.String getPathPrefix();
```

- *Type:* java.lang.String

---

##### `readMask`<sup>Required</sup> <a name="readMask" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.readMask"></a>

```java
public java.lang.String getReadMask();
```

- *Type:* java.lang.String

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.sessionId"></a>

```java
public java.lang.String getSessionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMasonManagedMemoryEntriesConfig <a name="DataDatabricksMasonManagedMemoryEntriesConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mason_managed_memory_entries.DataDatabricksMasonManagedMemoryEntriesConfig;

DataDatabricksMasonManagedMemoryEntriesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actorId(java.lang.String)
    .parent(java.lang.String)
//  .pageSize(java.lang.Number)
//  .pathPrefix(java.lang.String)
//  .providerConfig(DataDatabricksMasonManagedMemoryEntriesProviderConfig)
//  .readMask(java.lang.String)
//  .sessionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.actorId">actorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#actor_id DataDatabricksMasonManagedMemoryEntries#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#parent DataDatabricksMasonManagedMemoryEntries#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#page_size DataDatabricksMasonManagedMemoryEntries#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.pathPrefix">pathPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#path_prefix DataDatabricksMasonManagedMemoryEntries#path_prefix}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.readMask">readMask</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#read_mask DataDatabricksMasonManagedMemoryEntries#read_mask}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.sessionId">sessionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#session_id DataDatabricksMasonManagedMemoryEntries#session_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.actorId"></a>

```java
public java.lang.String getActorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#actor_id DataDatabricksMasonManagedMemoryEntries#actor_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#parent DataDatabricksMasonManagedMemoryEntries#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#page_size DataDatabricksMasonManagedMemoryEntries#page_size}.

---

##### `pathPrefix`<sup>Optional</sup> <a name="pathPrefix" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.pathPrefix"></a>

```java
public java.lang.String getPathPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#path_prefix DataDatabricksMasonManagedMemoryEntries#path_prefix}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.providerConfig"></a>

```java
public DataDatabricksMasonManagedMemoryEntriesProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}.

---

##### `readMask`<sup>Optional</sup> <a name="readMask" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.readMask"></a>

```java
public java.lang.String getReadMask();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#read_mask DataDatabricksMasonManagedMemoryEntries#read_mask}.

---

##### `sessionId`<sup>Optional</sup> <a name="sessionId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.sessionId"></a>

```java
public java.lang.String getSessionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#session_id DataDatabricksMasonManagedMemoryEntries#session_id}.

---

### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mason_managed_memory_entries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries;

DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.builder()
    .name(java.lang.String)
//  .providerConfig(DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#name DataDatabricksMasonManagedMemoryEntries#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#name DataDatabricksMasonManagedMemoryEntries#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.property.providerConfig"></a>

```java
public DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}.

---

### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mason_managed_memory_entries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig;

DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}.

---

### DataDatabricksMasonManagedMemoryEntriesProviderConfig <a name="DataDatabricksMasonManagedMemoryEntriesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mason_managed_memory_entries.DataDatabricksMasonManagedMemoryEntriesProviderConfig;

DataDatabricksMasonManagedMemoryEntriesProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mason_managed_memory_entries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList;

new DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.get"></a>

```java
public DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries</a>>

---


### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mason_managed_memory_entries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference;

new DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.actorId">actorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sessionId">sessionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.actorId"></a>

```java
public java.lang.String getActorId();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfig"></a>

```java
public DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference</a>

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sessionId"></a>

```java
public java.lang.String getSessionId();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.internalValue"></a>

```java
public DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries</a>

---


### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mason_managed_memory_entries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference;

new DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

---


### DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference <a name="DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_mason_managed_memory_entries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference;

new DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksMasonManagedMemoryEntriesProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a>

---



