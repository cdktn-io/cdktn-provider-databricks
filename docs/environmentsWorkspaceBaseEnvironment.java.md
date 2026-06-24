# `environmentsWorkspaceBaseEnvironment` Submodule <a name="`environmentsWorkspaceBaseEnvironment` Submodule" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnvironmentsWorkspaceBaseEnvironment <a name="EnvironmentsWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment databricks_environments_workspace_base_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer"></a>

```java
import io.cdktn.providers.databricks.environments_workspace_base_environment.EnvironmentsWorkspaceBaseEnvironment;

EnvironmentsWorkspaceBaseEnvironment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .baseEnvironmentType(java.lang.String)
//  .filepath(java.lang.String)
//  .providerConfig(EnvironmentsWorkspaceBaseEnvironmentProviderConfig)
//  .workspaceBaseEnvironmentId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#display_name EnvironmentsWorkspaceBaseEnvironment#display_name}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.baseEnvironmentType">baseEnvironmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#base_environment_type EnvironmentsWorkspaceBaseEnvironment#base_environment_type}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.filepath">filepath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#filepath EnvironmentsWorkspaceBaseEnvironment#filepath}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#provider_config EnvironmentsWorkspaceBaseEnvironment#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.workspaceBaseEnvironmentId">workspaceBaseEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#workspace_base_environment_id EnvironmentsWorkspaceBaseEnvironment#workspace_base_environment_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#display_name EnvironmentsWorkspaceBaseEnvironment#display_name}.

---

##### `baseEnvironmentType`<sup>Optional</sup> <a name="baseEnvironmentType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.baseEnvironmentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#base_environment_type EnvironmentsWorkspaceBaseEnvironment#base_environment_type}.

---

##### `filepath`<sup>Optional</sup> <a name="filepath" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.filepath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#filepath EnvironmentsWorkspaceBaseEnvironment#filepath}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#provider_config EnvironmentsWorkspaceBaseEnvironment#provider_config}.

---

##### `workspaceBaseEnvironmentId`<sup>Optional</sup> <a name="workspaceBaseEnvironmentId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.workspaceBaseEnvironmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#workspace_base_environment_id EnvironmentsWorkspaceBaseEnvironment#workspace_base_environment_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetBaseEnvironmentType">resetBaseEnvironmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetFilepath">resetFilepath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetWorkspaceBaseEnvironmentId">resetWorkspaceBaseEnvironmentId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.putProviderConfig"></a>

```java
public void putProviderConfig(EnvironmentsWorkspaceBaseEnvironmentProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `resetBaseEnvironmentType` <a name="resetBaseEnvironmentType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetBaseEnvironmentType"></a>

```java
public void resetBaseEnvironmentType()
```

##### `resetFilepath` <a name="resetFilepath" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetFilepath"></a>

```java
public void resetFilepath()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetWorkspaceBaseEnvironmentId` <a name="resetWorkspaceBaseEnvironmentId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetWorkspaceBaseEnvironmentId"></a>

```java
public void resetWorkspaceBaseEnvironmentId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EnvironmentsWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isConstruct"></a>

```java
import io.cdktn.providers.databricks.environments_workspace_base_environment.EnvironmentsWorkspaceBaseEnvironment;

EnvironmentsWorkspaceBaseEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.environments_workspace_base_environment.EnvironmentsWorkspaceBaseEnvironment;

EnvironmentsWorkspaceBaseEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.environments_workspace_base_environment.EnvironmentsWorkspaceBaseEnvironment;

EnvironmentsWorkspaceBaseEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.environments_workspace_base_environment.EnvironmentsWorkspaceBaseEnvironment;

EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EnvironmentsWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EnvironmentsWorkspaceBaseEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EnvironmentsWorkspaceBaseEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EnvironmentsWorkspaceBaseEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.creatorUserId">creatorUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.effectiveBaseEnvironmentType">effectiveBaseEnvironmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.isDefault">isDefault</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lastUpdatedUserId">lastUpdatedUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference">EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentTypeInput">baseEnvironmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepathInput">filepathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentIdInput">workspaceBaseEnvironmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentType">baseEnvironmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepath">filepath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentId">workspaceBaseEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creatorUserId`<sup>Required</sup> <a name="creatorUserId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.creatorUserId"></a>

```java
public java.lang.String getCreatorUserId();
```

- *Type:* java.lang.String

---

##### `effectiveBaseEnvironmentType`<sup>Required</sup> <a name="effectiveBaseEnvironmentType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.effectiveBaseEnvironmentType"></a>

```java
public java.lang.String getEffectiveBaseEnvironmentType();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.isDefault"></a>

```java
public IResolvable getIsDefault();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `lastUpdatedUserId`<sup>Required</sup> <a name="lastUpdatedUserId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lastUpdatedUserId"></a>

```java
public java.lang.String getLastUpdatedUserId();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfig"></a>

```java
public EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference">EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `baseEnvironmentTypeInput`<sup>Optional</sup> <a name="baseEnvironmentTypeInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentTypeInput"></a>

```java
public java.lang.String getBaseEnvironmentTypeInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filepathInput`<sup>Optional</sup> <a name="filepathInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepathInput"></a>

```java
public java.lang.String getFilepathInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfigInput"></a>

```java
public IResolvable|EnvironmentsWorkspaceBaseEnvironmentProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `workspaceBaseEnvironmentIdInput`<sup>Optional</sup> <a name="workspaceBaseEnvironmentIdInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentIdInput"></a>

```java
public java.lang.String getWorkspaceBaseEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `baseEnvironmentType`<sup>Required</sup> <a name="baseEnvironmentType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentType"></a>

```java
public java.lang.String getBaseEnvironmentType();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `filepath`<sup>Required</sup> <a name="filepath" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepath"></a>

```java
public java.lang.String getFilepath();
```

- *Type:* java.lang.String

---

##### `workspaceBaseEnvironmentId`<sup>Required</sup> <a name="workspaceBaseEnvironmentId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentId"></a>

```java
public java.lang.String getWorkspaceBaseEnvironmentId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EnvironmentsWorkspaceBaseEnvironmentConfig <a name="EnvironmentsWorkspaceBaseEnvironmentConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.environments_workspace_base_environment.EnvironmentsWorkspaceBaseEnvironmentConfig;

EnvironmentsWorkspaceBaseEnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .baseEnvironmentType(java.lang.String)
//  .filepath(java.lang.String)
//  .providerConfig(EnvironmentsWorkspaceBaseEnvironmentProviderConfig)
//  .workspaceBaseEnvironmentId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#display_name EnvironmentsWorkspaceBaseEnvironment#display_name}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.baseEnvironmentType">baseEnvironmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#base_environment_type EnvironmentsWorkspaceBaseEnvironment#base_environment_type}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.filepath">filepath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#filepath EnvironmentsWorkspaceBaseEnvironment#filepath}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#provider_config EnvironmentsWorkspaceBaseEnvironment#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.workspaceBaseEnvironmentId">workspaceBaseEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#workspace_base_environment_id EnvironmentsWorkspaceBaseEnvironment#workspace_base_environment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#display_name EnvironmentsWorkspaceBaseEnvironment#display_name}.

---

##### `baseEnvironmentType`<sup>Optional</sup> <a name="baseEnvironmentType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.baseEnvironmentType"></a>

```java
public java.lang.String getBaseEnvironmentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#base_environment_type EnvironmentsWorkspaceBaseEnvironment#base_environment_type}.

---

##### `filepath`<sup>Optional</sup> <a name="filepath" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.filepath"></a>

```java
public java.lang.String getFilepath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#filepath EnvironmentsWorkspaceBaseEnvironment#filepath}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.providerConfig"></a>

```java
public EnvironmentsWorkspaceBaseEnvironmentProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#provider_config EnvironmentsWorkspaceBaseEnvironment#provider_config}.

---

##### `workspaceBaseEnvironmentId`<sup>Optional</sup> <a name="workspaceBaseEnvironmentId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.workspaceBaseEnvironmentId"></a>

```java
public java.lang.String getWorkspaceBaseEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#workspace_base_environment_id EnvironmentsWorkspaceBaseEnvironment#workspace_base_environment_id}.

---

### EnvironmentsWorkspaceBaseEnvironmentProviderConfig <a name="EnvironmentsWorkspaceBaseEnvironmentProviderConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.environments_workspace_base_environment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig;

EnvironmentsWorkspaceBaseEnvironmentProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#workspace_id EnvironmentsWorkspaceBaseEnvironment#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/environments_workspace_base_environment#workspace_id EnvironmentsWorkspaceBaseEnvironment#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference <a name="EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.environments_workspace_base_environment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference;

new EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EnvironmentsWorkspaceBaseEnvironmentProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

---



