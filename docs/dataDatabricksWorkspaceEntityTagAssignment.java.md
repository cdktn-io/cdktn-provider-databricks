# `dataDatabricksWorkspaceEntityTagAssignment` Submodule <a name="`dataDatabricksWorkspaceEntityTagAssignment` Submodule" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceEntityTagAssignment <a name="DataDatabricksWorkspaceEntityTagAssignment" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment databricks_workspace_entity_tag_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_workspace_entity_tag_assignment.DataDatabricksWorkspaceEntityTagAssignment;

DataDatabricksWorkspaceEntityTagAssignment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .entityId(java.lang.String)
    .entityType(java.lang.String)
    .tagKey(java.lang.String)
//  .providerConfig(DataDatabricksWorkspaceEntityTagAssignmentProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.entityId">entityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#entity_id DataDatabricksWorkspaceEntityTagAssignment#entity_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#entity_type DataDatabricksWorkspaceEntityTagAssignment#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#tag_key DataDatabricksWorkspaceEntityTagAssignment#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#provider_config DataDatabricksWorkspaceEntityTagAssignment#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.entityId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#entity_id DataDatabricksWorkspaceEntityTagAssignment#entity_id}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.entityType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#entity_type DataDatabricksWorkspaceEntityTagAssignment#entity_type}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.tagKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#tag_key DataDatabricksWorkspaceEntityTagAssignment#tag_key}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#provider_config DataDatabricksWorkspaceEntityTagAssignment#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksWorkspaceEntityTagAssignmentProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksWorkspaceEntityTagAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_workspace_entity_tag_assignment.DataDatabricksWorkspaceEntityTagAssignment;

DataDatabricksWorkspaceEntityTagAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_workspace_entity_tag_assignment.DataDatabricksWorkspaceEntityTagAssignment;

DataDatabricksWorkspaceEntityTagAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_workspace_entity_tag_assignment.DataDatabricksWorkspaceEntityTagAssignment;

DataDatabricksWorkspaceEntityTagAssignment.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_workspace_entity_tag_assignment.DataDatabricksWorkspaceEntityTagAssignment;

DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksWorkspaceEntityTagAssignment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksWorkspaceEntityTagAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksWorkspaceEntityTagAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceEntityTagAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference">DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityIdInput">entityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityTypeInput">entityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.providerConfig"></a>

```java
public DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference">DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference</a>

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityIdInput"></a>

```java
public java.lang.String getEntityIdInput();
```

- *Type:* java.lang.String

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityTypeInput"></a>

```java
public java.lang.String getEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksWorkspaceEntityTagAssignmentProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a>

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceEntityTagAssignmentConfig <a name="DataDatabricksWorkspaceEntityTagAssignmentConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_workspace_entity_tag_assignment.DataDatabricksWorkspaceEntityTagAssignmentConfig;

DataDatabricksWorkspaceEntityTagAssignmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .entityId(java.lang.String)
    .entityType(java.lang.String)
    .tagKey(java.lang.String)
//  .providerConfig(DataDatabricksWorkspaceEntityTagAssignmentProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.entityId">entityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#entity_id DataDatabricksWorkspaceEntityTagAssignment#entity_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#entity_type DataDatabricksWorkspaceEntityTagAssignment#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#tag_key DataDatabricksWorkspaceEntityTagAssignment#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#provider_config DataDatabricksWorkspaceEntityTagAssignment#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#entity_id DataDatabricksWorkspaceEntityTagAssignment#entity_id}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#entity_type DataDatabricksWorkspaceEntityTagAssignment#entity_type}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#tag_key DataDatabricksWorkspaceEntityTagAssignment#tag_key}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.providerConfig"></a>

```java
public DataDatabricksWorkspaceEntityTagAssignmentProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#provider_config DataDatabricksWorkspaceEntityTagAssignment#provider_config}.

---

### DataDatabricksWorkspaceEntityTagAssignmentProviderConfig <a name="DataDatabricksWorkspaceEntityTagAssignmentProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_workspace_entity_tag_assignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig;

DataDatabricksWorkspaceEntityTagAssignmentProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#workspace_id DataDatabricksWorkspaceEntityTagAssignment#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignment#workspace_id DataDatabricksWorkspaceEntityTagAssignment#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference <a name="DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_workspace_entity_tag_assignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference;

new DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksWorkspaceEntityTagAssignmentProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a>

---



