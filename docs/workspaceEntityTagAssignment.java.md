# `workspaceEntityTagAssignment` Submodule <a name="`workspaceEntityTagAssignment` Submodule" id="@cdktn/provider-databricks.workspaceEntityTagAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceEntityTagAssignment <a name="WorkspaceEntityTagAssignment" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment databricks_workspace_entity_tag_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer"></a>

```java
import io.cdktn.providers.databricks.workspace_entity_tag_assignment.WorkspaceEntityTagAssignment;

WorkspaceEntityTagAssignment.Builder.create(Construct scope, java.lang.String id)
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
//  .providerConfig(WorkspaceEntityTagAssignmentProviderConfig)
//  .tagValue(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.entityId">entityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#entity_id WorkspaceEntityTagAssignment#entity_id}. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#entity_type WorkspaceEntityTagAssignment#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#tag_key WorkspaceEntityTagAssignment#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig">WorkspaceEntityTagAssignmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#provider_config WorkspaceEntityTagAssignment#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#tag_value WorkspaceEntityTagAssignment#tag_value}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.entityId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#entity_id WorkspaceEntityTagAssignment#entity_id}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.entityType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#entity_type WorkspaceEntityTagAssignment#entity_type}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.tagKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#tag_key WorkspaceEntityTagAssignment#tag_key}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig">WorkspaceEntityTagAssignmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#provider_config WorkspaceEntityTagAssignment#provider_config}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.tagValue"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#tag_value WorkspaceEntityTagAssignment#tag_value}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.putProviderConfig"></a>

```java
public void putProviderConfig(WorkspaceEntityTagAssignmentProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig">WorkspaceEntityTagAssignmentProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.resetTagValue"></a>

```java
public void resetTagValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspaceEntityTagAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isConstruct"></a>

```java
import io.cdktn.providers.databricks.workspace_entity_tag_assignment.WorkspaceEntityTagAssignment;

WorkspaceEntityTagAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.workspace_entity_tag_assignment.WorkspaceEntityTagAssignment;

WorkspaceEntityTagAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.workspace_entity_tag_assignment.WorkspaceEntityTagAssignment;

WorkspaceEntityTagAssignment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.workspace_entity_tag_assignment.WorkspaceEntityTagAssignment;

WorkspaceEntityTagAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkspaceEntityTagAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WorkspaceEntityTagAssignment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkspaceEntityTagAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkspaceEntityTagAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceEntityTagAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference">WorkspaceEntityTagAssignmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityIdInput">entityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityTypeInput">entityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig">WorkspaceEntityTagAssignmentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.providerConfig"></a>

```java
public WorkspaceEntityTagAssignmentProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference">WorkspaceEntityTagAssignmentProviderConfigOutputReference</a>

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityIdInput"></a>

```java
public java.lang.String getEntityIdInput();
```

- *Type:* java.lang.String

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityTypeInput"></a>

```java
public java.lang.String getEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.providerConfigInput"></a>

```java
public IResolvable|WorkspaceEntityTagAssignmentProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig">WorkspaceEntityTagAssignmentProviderConfig</a>

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceEntityTagAssignmentConfig <a name="WorkspaceEntityTagAssignmentConfig" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.workspace_entity_tag_assignment.WorkspaceEntityTagAssignmentConfig;

WorkspaceEntityTagAssignmentConfig.builder()
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
//  .providerConfig(WorkspaceEntityTagAssignmentProviderConfig)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.entityId">entityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#entity_id WorkspaceEntityTagAssignment#entity_id}. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#entity_type WorkspaceEntityTagAssignment#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#tag_key WorkspaceEntityTagAssignment#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig">WorkspaceEntityTagAssignmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#provider_config WorkspaceEntityTagAssignment#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#tag_value WorkspaceEntityTagAssignment#tag_value}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#entity_id WorkspaceEntityTagAssignment#entity_id}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#entity_type WorkspaceEntityTagAssignment#entity_type}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#tag_key WorkspaceEntityTagAssignment#tag_key}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.providerConfig"></a>

```java
public WorkspaceEntityTagAssignmentProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig">WorkspaceEntityTagAssignmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#provider_config WorkspaceEntityTagAssignment#provider_config}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#tag_value WorkspaceEntityTagAssignment#tag_value}.

---

### WorkspaceEntityTagAssignmentProviderConfig <a name="WorkspaceEntityTagAssignmentProviderConfig" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.workspace_entity_tag_assignment.WorkspaceEntityTagAssignmentProviderConfig;

WorkspaceEntityTagAssignmentProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#workspace_id WorkspaceEntityTagAssignment#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/workspace_entity_tag_assignment#workspace_id WorkspaceEntityTagAssignment#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceEntityTagAssignmentProviderConfigOutputReference <a name="WorkspaceEntityTagAssignmentProviderConfigOutputReference" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.workspace_entity_tag_assignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference;

new WorkspaceEntityTagAssignmentProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig">WorkspaceEntityTagAssignmentProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspaceEntityTagAssignmentProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig">WorkspaceEntityTagAssignmentProviderConfig</a>

---



