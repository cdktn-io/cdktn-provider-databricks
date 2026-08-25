# `workspaceIamUserV2` Submodule <a name="`workspaceIamUserV2` Submodule" id="@cdktn/provider-databricks.workspaceIamUserV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceIamUserV2 <a name="WorkspaceIamUserV2" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2 databricks_workspace_iam_user_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer"></a>

```java
import io.cdktn.providers.databricks.workspace_iam_user_v2.WorkspaceIamUserV2;

WorkspaceIamUserV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountUserStatus(java.lang.String)
    .fullName(WorkspaceIamUserV2FullName)
    .username(java.lang.String)
//  .externalId(java.lang.String)
//  .providerConfig(WorkspaceIamUserV2ProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.accountUserStatus">accountUserStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#account_user_status WorkspaceIamUserV2#account_user_status}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.fullName">fullName</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName">WorkspaceIamUserV2FullName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#full_name WorkspaceIamUserV2#full_name}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#username WorkspaceIamUserV2#username}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#external_id WorkspaceIamUserV2#external_id}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig">WorkspaceIamUserV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#provider_config WorkspaceIamUserV2#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountUserStatus`<sup>Required</sup> <a name="accountUserStatus" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.accountUserStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#account_user_status WorkspaceIamUserV2#account_user_status}.

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.fullName"></a>

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName">WorkspaceIamUserV2FullName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#full_name WorkspaceIamUserV2#full_name}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#username WorkspaceIamUserV2#username}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.externalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#external_id WorkspaceIamUserV2#external_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig">WorkspaceIamUserV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#provider_config WorkspaceIamUserV2#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.putFullName">putFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFullName` <a name="putFullName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.putFullName"></a>

```java
public void putFullName(WorkspaceIamUserV2FullName value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.putFullName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName">WorkspaceIamUserV2FullName</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.putProviderConfig"></a>

```java
public void putProviderConfig(WorkspaceIamUserV2ProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig">WorkspaceIamUserV2ProviderConfig</a>

---

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspaceIamUserV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isConstruct"></a>

```java
import io.cdktn.providers.databricks.workspace_iam_user_v2.WorkspaceIamUserV2;

WorkspaceIamUserV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.workspace_iam_user_v2.WorkspaceIamUserV2;

WorkspaceIamUserV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.workspace_iam_user_v2.WorkspaceIamUserV2;

WorkspaceIamUserV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.workspace_iam_user_v2.WorkspaceIamUserV2;

WorkspaceIamUserV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkspaceIamUserV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WorkspaceIamUserV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkspaceIamUserV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkspaceIamUserV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceIamUserV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.fullName">fullName</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference">WorkspaceIamUserV2FullNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference">WorkspaceIamUserV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.accountUserStatusInput">accountUserStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.fullNameInput">fullNameInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName">WorkspaceIamUserV2FullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig">WorkspaceIamUserV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.accountUserStatus">accountUserStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.fullName"></a>

```java
public WorkspaceIamUserV2FullNameOutputReference getFullName();
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference">WorkspaceIamUserV2FullNameOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.providerConfig"></a>

```java
public WorkspaceIamUserV2ProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference">WorkspaceIamUserV2ProviderConfigOutputReference</a>

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `accountUserStatusInput`<sup>Optional</sup> <a name="accountUserStatusInput" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.accountUserStatusInput"></a>

```java
public java.lang.String getAccountUserStatusInput();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.fullNameInput"></a>

```java
public IResolvable|WorkspaceIamUserV2FullName getFullNameInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName">WorkspaceIamUserV2FullName</a>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.providerConfigInput"></a>

```java
public IResolvable|WorkspaceIamUserV2ProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig">WorkspaceIamUserV2ProviderConfig</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `accountUserStatus`<sup>Required</sup> <a name="accountUserStatus" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.accountUserStatus"></a>

```java
public java.lang.String getAccountUserStatus();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceIamUserV2Config <a name="WorkspaceIamUserV2Config" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.Initializer"></a>

```java
import io.cdktn.providers.databricks.workspace_iam_user_v2.WorkspaceIamUserV2Config;

WorkspaceIamUserV2Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountUserStatus(java.lang.String)
    .fullName(WorkspaceIamUserV2FullName)
    .username(java.lang.String)
//  .externalId(java.lang.String)
//  .providerConfig(WorkspaceIamUserV2ProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.accountUserStatus">accountUserStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#account_user_status WorkspaceIamUserV2#account_user_status}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.fullName">fullName</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName">WorkspaceIamUserV2FullName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#full_name WorkspaceIamUserV2#full_name}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#username WorkspaceIamUserV2#username}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#external_id WorkspaceIamUserV2#external_id}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig">WorkspaceIamUserV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#provider_config WorkspaceIamUserV2#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountUserStatus`<sup>Required</sup> <a name="accountUserStatus" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.accountUserStatus"></a>

```java
public java.lang.String getAccountUserStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#account_user_status WorkspaceIamUserV2#account_user_status}.

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.fullName"></a>

```java
public WorkspaceIamUserV2FullName getFullName();
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName">WorkspaceIamUserV2FullName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#full_name WorkspaceIamUserV2#full_name}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#username WorkspaceIamUserV2#username}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#external_id WorkspaceIamUserV2#external_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2Config.property.providerConfig"></a>

```java
public WorkspaceIamUserV2ProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig">WorkspaceIamUserV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#provider_config WorkspaceIamUserV2#provider_config}.

---

### WorkspaceIamUserV2FullName <a name="WorkspaceIamUserV2FullName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName.Initializer"></a>

```java
import io.cdktn.providers.databricks.workspace_iam_user_v2.WorkspaceIamUserV2FullName;

WorkspaceIamUserV2FullName.builder()
//  .familyName(java.lang.String)
//  .givenName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName.property.familyName">familyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#family_name WorkspaceIamUserV2#family_name}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName.property.givenName">givenName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#given_name WorkspaceIamUserV2#given_name}. |

---

##### `familyName`<sup>Optional</sup> <a name="familyName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName.property.familyName"></a>

```java
public java.lang.String getFamilyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#family_name WorkspaceIamUserV2#family_name}.

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#given_name WorkspaceIamUserV2#given_name}.

---

### WorkspaceIamUserV2ProviderConfig <a name="WorkspaceIamUserV2ProviderConfig" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.workspace_iam_user_v2.WorkspaceIamUserV2ProviderConfig;

WorkspaceIamUserV2ProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#workspace_id WorkspaceIamUserV2#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_user_v2#workspace_id WorkspaceIamUserV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceIamUserV2FullNameOutputReference <a name="WorkspaceIamUserV2FullNameOutputReference" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.workspace_iam_user_v2.WorkspaceIamUserV2FullNameOutputReference;

new WorkspaceIamUserV2FullNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.resetFamilyName">resetFamilyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.resetGivenName">resetGivenName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFamilyName` <a name="resetFamilyName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.resetFamilyName"></a>

```java
public void resetFamilyName()
```

##### `resetGivenName` <a name="resetGivenName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.resetGivenName"></a>

```java
public void resetGivenName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.familyNameInput">familyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.givenNameInput">givenNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.familyName">familyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.givenName">givenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName">WorkspaceIamUserV2FullName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `familyNameInput`<sup>Optional</sup> <a name="familyNameInput" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.familyNameInput"></a>

```java
public java.lang.String getFamilyNameInput();
```

- *Type:* java.lang.String

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.givenNameInput"></a>

```java
public java.lang.String getGivenNameInput();
```

- *Type:* java.lang.String

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.familyName"></a>

```java
public java.lang.String getFamilyName();
```

- *Type:* java.lang.String

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullNameOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspaceIamUserV2FullName getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2FullName">WorkspaceIamUserV2FullName</a>

---


### WorkspaceIamUserV2ProviderConfigOutputReference <a name="WorkspaceIamUserV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.workspace_iam_user_v2.WorkspaceIamUserV2ProviderConfigOutputReference;

new WorkspaceIamUserV2ProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig">WorkspaceIamUserV2ProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspaceIamUserV2ProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.workspaceIamUserV2.WorkspaceIamUserV2ProviderConfig">WorkspaceIamUserV2ProviderConfig</a>

---



