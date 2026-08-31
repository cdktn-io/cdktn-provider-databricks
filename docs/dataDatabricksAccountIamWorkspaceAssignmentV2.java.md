# `dataDatabricksAccountIamWorkspaceAssignmentV2` Submodule <a name="`dataDatabricksAccountIamWorkspaceAssignmentV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountIamWorkspaceAssignmentV2 <a name="DataDatabricksAccountIamWorkspaceAssignmentV2" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignment_v2 databricks_account_iam_workspace_assignment_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_iam_workspace_assignment_v2.DataDatabricksAccountIamWorkspaceAssignmentV2;

DataDatabricksAccountIamWorkspaceAssignmentV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .principalId(java.lang.Number)
    .workspaceId(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.principalId">principalId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignment_v2#principal_id DataDatabricksAccountIamWorkspaceAssignmentV2#principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignment_v2#workspace_id DataDatabricksAccountIamWorkspaceAssignmentV2#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.principalId"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignment_v2#principal_id DataDatabricksAccountIamWorkspaceAssignmentV2#principal_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignment_v2#workspace_id DataDatabricksAccountIamWorkspaceAssignmentV2#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAccountIamWorkspaceAssignmentV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.isConstruct"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_iam_workspace_assignment_v2.DataDatabricksAccountIamWorkspaceAssignmentV2;

DataDatabricksAccountIamWorkspaceAssignmentV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_iam_workspace_assignment_v2.DataDatabricksAccountIamWorkspaceAssignmentV2;

DataDatabricksAccountIamWorkspaceAssignmentV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.isTerraformDataSource"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_iam_workspace_assignment_v2.DataDatabricksAccountIamWorkspaceAssignmentV2;

DataDatabricksAccountIamWorkspaceAssignmentV2.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_iam_workspace_assignment_v2.DataDatabricksAccountIamWorkspaceAssignmentV2;

DataDatabricksAccountIamWorkspaceAssignmentV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksAccountIamWorkspaceAssignmentV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatabricksAccountIamWorkspaceAssignmentV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksAccountIamWorkspaceAssignmentV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksAccountIamWorkspaceAssignmentV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignment_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountIamWorkspaceAssignmentV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.effectiveEntitlements">effectiveEntitlements</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.entitlements">entitlements</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.principalIdInput">principalIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.principalId">principalId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.workspaceId">workspaceId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `effectiveEntitlements`<sup>Required</sup> <a name="effectiveEntitlements" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.effectiveEntitlements"></a>

```java
public java.util.List<java.lang.String> getEffectiveEntitlements();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.entitlements"></a>

```java
public java.util.List<java.lang.String> getEntitlements();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.principalIdInput"></a>

```java
public java.lang.Number getPrincipalIdInput();
```

- *Type:* java.lang.Number

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.workspaceIdInput"></a>

```java
public java.lang.Number getWorkspaceIdInput();
```

- *Type:* java.lang.Number

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.principalId"></a>

```java
public java.lang.Number getPrincipalId();
```

- *Type:* java.lang.Number

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.workspaceId"></a>

```java
public java.lang.Number getWorkspaceId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountIamWorkspaceAssignmentV2Config <a name="DataDatabricksAccountIamWorkspaceAssignmentV2Config" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.Initializer"></a>

```java
import io.cdktn.providers.databricks.data_databricks_account_iam_workspace_assignment_v2.DataDatabricksAccountIamWorkspaceAssignmentV2Config;

DataDatabricksAccountIamWorkspaceAssignmentV2Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .principalId(java.lang.Number)
    .workspaceId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.principalId">principalId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignment_v2#principal_id DataDatabricksAccountIamWorkspaceAssignmentV2#principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.workspaceId">workspaceId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignment_v2#workspace_id DataDatabricksAccountIamWorkspaceAssignmentV2#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.principalId"></a>

```java
public java.lang.Number getPrincipalId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignment_v2#principal_id DataDatabricksAccountIamWorkspaceAssignmentV2#principal_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentV2.DataDatabricksAccountIamWorkspaceAssignmentV2Config.property.workspaceId"></a>

```java
public java.lang.Number getWorkspaceId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignment_v2#workspace_id DataDatabricksAccountIamWorkspaceAssignmentV2#workspace_id}.

---



