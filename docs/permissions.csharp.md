# `permissions` Submodule <a name="`permissions` Submodule" id="@cdktn/provider-databricks.permissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Permissions <a name="Permissions" id="@cdktn/provider-databricks.permissions.Permissions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions databricks_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.permissions.Permissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new Permissions(Construct Scope, string Id, PermissionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig">PermissionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.permissions.Permissions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.permissions.Permissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.permissions.Permissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.permissions.PermissionsConfig">PermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.putAccessControl">PutAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetAlertV2Id">ResetAlertV2Id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetAppName">ResetAppName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetClusterPolicyId">ResetClusterPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetDashboardId">ResetDashboardId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetDatabaseInstanceName">ResetDatabaseInstanceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetDatabaseProjectName">ResetDatabaseProjectName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetDirectoryId">ResetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetDirectoryPath">ResetDirectoryPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetExperimentId">ResetExperimentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetInstancePoolId">ResetInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetJobId">ResetJobId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetKnowledgeAssistantId">ResetKnowledgeAssistantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetNotebookId">ResetNotebookId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetNotebookPath">ResetNotebookPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetObjectType">ResetObjectType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetPipelineId">ResetPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetRegisteredModelId">ResetRegisteredModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetRepoId">ResetRepoId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetRepoPath">ResetRepoPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetServingEndpointId">ResetServingEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetSqlAlertId">ResetSqlAlertId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetSqlDashboardId">ResetSqlDashboardId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetSqlEndpointId">ResetSqlEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetSqlQueryId">ResetSqlQueryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetSupervisorAgentId">ResetSupervisorAgentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetVectorSearchEndpointId">ResetVectorSearchEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetWorkspaceFileId">ResetWorkspaceFileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.resetWorkspaceFilePath">ResetWorkspaceFilePath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.permissions.Permissions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.permissions.Permissions.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.permissions.Permissions.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.permissions.Permissions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.permissions.Permissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.permissions.Permissions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.permissions.Permissions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.permissions.Permissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.permissions.Permissions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.permissions.Permissions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.permissions.Permissions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.permissions.Permissions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.permissions.Permissions.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.permissions.Permissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.permissions.Permissions.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.permissions.Permissions.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.permissions.Permissions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.permissions.Permissions.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.permissions.Permissions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.permissions.Permissions.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.permissions.Permissions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.permissions.Permissions.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.permissions.Permissions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.permissions.Permissions.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.permissions.Permissions.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.permissions.Permissions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessControl` <a name="PutAccessControl" id="@cdktn/provider-databricks.permissions.Permissions.putAccessControl"></a>

```csharp
private void PutAccessControl(IResolvable|PermissionsAccessControl[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.permissions.Permissions.putAccessControl.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>[]

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.permissions.Permissions.putProviderConfig"></a>

```csharp
private void PutProviderConfig(PermissionsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.permissions.Permissions.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfig">PermissionsProviderConfig</a>

---

##### `ResetAlertV2Id` <a name="ResetAlertV2Id" id="@cdktn/provider-databricks.permissions.Permissions.resetAlertV2Id"></a>

```csharp
private void ResetAlertV2Id()
```

##### `ResetAppName` <a name="ResetAppName" id="@cdktn/provider-databricks.permissions.Permissions.resetAppName"></a>

```csharp
private void ResetAppName()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktn/provider-databricks.permissions.Permissions.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktn/provider-databricks.permissions.Permissions.resetClusterId"></a>

```csharp
private void ResetClusterId()
```

##### `ResetClusterPolicyId` <a name="ResetClusterPolicyId" id="@cdktn/provider-databricks.permissions.Permissions.resetClusterPolicyId"></a>

```csharp
private void ResetClusterPolicyId()
```

##### `ResetDashboardId` <a name="ResetDashboardId" id="@cdktn/provider-databricks.permissions.Permissions.resetDashboardId"></a>

```csharp
private void ResetDashboardId()
```

##### `ResetDatabaseInstanceName` <a name="ResetDatabaseInstanceName" id="@cdktn/provider-databricks.permissions.Permissions.resetDatabaseInstanceName"></a>

```csharp
private void ResetDatabaseInstanceName()
```

##### `ResetDatabaseProjectName` <a name="ResetDatabaseProjectName" id="@cdktn/provider-databricks.permissions.Permissions.resetDatabaseProjectName"></a>

```csharp
private void ResetDatabaseProjectName()
```

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktn/provider-databricks.permissions.Permissions.resetDirectoryId"></a>

```csharp
private void ResetDirectoryId()
```

##### `ResetDirectoryPath` <a name="ResetDirectoryPath" id="@cdktn/provider-databricks.permissions.Permissions.resetDirectoryPath"></a>

```csharp
private void ResetDirectoryPath()
```

##### `ResetExperimentId` <a name="ResetExperimentId" id="@cdktn/provider-databricks.permissions.Permissions.resetExperimentId"></a>

```csharp
private void ResetExperimentId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.permissions.Permissions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstancePoolId` <a name="ResetInstancePoolId" id="@cdktn/provider-databricks.permissions.Permissions.resetInstancePoolId"></a>

```csharp
private void ResetInstancePoolId()
```

##### `ResetJobId` <a name="ResetJobId" id="@cdktn/provider-databricks.permissions.Permissions.resetJobId"></a>

```csharp
private void ResetJobId()
```

##### `ResetKnowledgeAssistantId` <a name="ResetKnowledgeAssistantId" id="@cdktn/provider-databricks.permissions.Permissions.resetKnowledgeAssistantId"></a>

```csharp
private void ResetKnowledgeAssistantId()
```

##### `ResetNotebookId` <a name="ResetNotebookId" id="@cdktn/provider-databricks.permissions.Permissions.resetNotebookId"></a>

```csharp
private void ResetNotebookId()
```

##### `ResetNotebookPath` <a name="ResetNotebookPath" id="@cdktn/provider-databricks.permissions.Permissions.resetNotebookPath"></a>

```csharp
private void ResetNotebookPath()
```

##### `ResetObjectType` <a name="ResetObjectType" id="@cdktn/provider-databricks.permissions.Permissions.resetObjectType"></a>

```csharp
private void ResetObjectType()
```

##### `ResetPipelineId` <a name="ResetPipelineId" id="@cdktn/provider-databricks.permissions.Permissions.resetPipelineId"></a>

```csharp
private void ResetPipelineId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.permissions.Permissions.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetRegisteredModelId` <a name="ResetRegisteredModelId" id="@cdktn/provider-databricks.permissions.Permissions.resetRegisteredModelId"></a>

```csharp
private void ResetRegisteredModelId()
```

##### `ResetRepoId` <a name="ResetRepoId" id="@cdktn/provider-databricks.permissions.Permissions.resetRepoId"></a>

```csharp
private void ResetRepoId()
```

##### `ResetRepoPath` <a name="ResetRepoPath" id="@cdktn/provider-databricks.permissions.Permissions.resetRepoPath"></a>

```csharp
private void ResetRepoPath()
```

##### `ResetServingEndpointId` <a name="ResetServingEndpointId" id="@cdktn/provider-databricks.permissions.Permissions.resetServingEndpointId"></a>

```csharp
private void ResetServingEndpointId()
```

##### `ResetSqlAlertId` <a name="ResetSqlAlertId" id="@cdktn/provider-databricks.permissions.Permissions.resetSqlAlertId"></a>

```csharp
private void ResetSqlAlertId()
```

##### `ResetSqlDashboardId` <a name="ResetSqlDashboardId" id="@cdktn/provider-databricks.permissions.Permissions.resetSqlDashboardId"></a>

```csharp
private void ResetSqlDashboardId()
```

##### `ResetSqlEndpointId` <a name="ResetSqlEndpointId" id="@cdktn/provider-databricks.permissions.Permissions.resetSqlEndpointId"></a>

```csharp
private void ResetSqlEndpointId()
```

##### `ResetSqlQueryId` <a name="ResetSqlQueryId" id="@cdktn/provider-databricks.permissions.Permissions.resetSqlQueryId"></a>

```csharp
private void ResetSqlQueryId()
```

##### `ResetSupervisorAgentId` <a name="ResetSupervisorAgentId" id="@cdktn/provider-databricks.permissions.Permissions.resetSupervisorAgentId"></a>

```csharp
private void ResetSupervisorAgentId()
```

##### `ResetVectorSearchEndpointId` <a name="ResetVectorSearchEndpointId" id="@cdktn/provider-databricks.permissions.Permissions.resetVectorSearchEndpointId"></a>

```csharp
private void ResetVectorSearchEndpointId()
```

##### `ResetWorkspaceFileId` <a name="ResetWorkspaceFileId" id="@cdktn/provider-databricks.permissions.Permissions.resetWorkspaceFileId"></a>

```csharp
private void ResetWorkspaceFileId()
```

##### `ResetWorkspaceFilePath` <a name="ResetWorkspaceFilePath" id="@cdktn/provider-databricks.permissions.Permissions.resetWorkspaceFilePath"></a>

```csharp
private void ResetWorkspaceFilePath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Permissions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.permissions.Permissions.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

Permissions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.permissions.Permissions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.permissions.Permissions.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

Permissions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.permissions.Permissions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.permissions.Permissions.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

Permissions.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.permissions.Permissions.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.permissions.Permissions.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

Permissions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Permissions resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Permissions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Permissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Permissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.accessControl">AccessControl</a></code> | <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList">PermissionsAccessControlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference">PermissionsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.accessControlInput">AccessControlInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.alertV2IdInput">AlertV2IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.appNameInput">AppNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.clusterPolicyIdInput">ClusterPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.dashboardIdInput">DashboardIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.databaseInstanceNameInput">DatabaseInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.databaseProjectNameInput">DatabaseProjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.directoryPathInput">DirectoryPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.experimentIdInput">ExperimentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.instancePoolIdInput">InstancePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.jobIdInput">JobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.knowledgeAssistantIdInput">KnowledgeAssistantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.notebookIdInput">NotebookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.notebookPathInput">NotebookPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.objectTypeInput">ObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.pipelineIdInput">PipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfig">PermissionsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.registeredModelIdInput">RegisteredModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.repoIdInput">RepoIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.repoPathInput">RepoPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.servingEndpointIdInput">ServingEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.sqlAlertIdInput">SqlAlertIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.sqlDashboardIdInput">SqlDashboardIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.sqlEndpointIdInput">SqlEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.sqlQueryIdInput">SqlQueryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.supervisorAgentIdInput">SupervisorAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.vectorSearchEndpointIdInput">VectorSearchEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.workspaceFileIdInput">WorkspaceFileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.workspaceFilePathInput">WorkspaceFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.alertV2Id">AlertV2Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.appName">AppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.clusterPolicyId">ClusterPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.dashboardId">DashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.databaseProjectName">DatabaseProjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.directoryPath">DirectoryPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.experimentId">ExperimentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.instancePoolId">InstancePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.jobId">JobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.knowledgeAssistantId">KnowledgeAssistantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.notebookId">NotebookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.notebookPath">NotebookPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.registeredModelId">RegisteredModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.repoId">RepoId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.repoPath">RepoPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.servingEndpointId">ServingEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.sqlAlertId">SqlAlertId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.sqlDashboardId">SqlDashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.sqlEndpointId">SqlEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.sqlQueryId">SqlQueryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.supervisorAgentId">SupervisorAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.vectorSearchEndpointId">VectorSearchEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.workspaceFileId">WorkspaceFileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.workspaceFilePath">WorkspaceFilePath</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.permissions.Permissions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.permissions.Permissions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.permissions.Permissions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.permissions.Permissions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.permissions.Permissions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.permissions.Permissions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.permissions.Permissions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.permissions.Permissions.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.permissions.Permissions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.permissions.Permissions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.permissions.Permissions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.permissions.Permissions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.permissions.Permissions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.permissions.Permissions.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessControl`<sup>Required</sup> <a name="AccessControl" id="@cdktn/provider-databricks.permissions.Permissions.property.accessControl"></a>

```csharp
public PermissionsAccessControlList AccessControl { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList">PermissionsAccessControlList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.permissions.Permissions.property.providerConfig"></a>

```csharp
public PermissionsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference">PermissionsProviderConfigOutputReference</a>

---

##### `AccessControlInput`<sup>Optional</sup> <a name="AccessControlInput" id="@cdktn/provider-databricks.permissions.Permissions.property.accessControlInput"></a>

```csharp
public IResolvable|PermissionsAccessControl[] AccessControlInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>[]

---

##### `AlertV2IdInput`<sup>Optional</sup> <a name="AlertV2IdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.alertV2IdInput"></a>

```csharp
public string AlertV2IdInput { get; }
```

- *Type:* string

---

##### `AppNameInput`<sup>Optional</sup> <a name="AppNameInput" id="@cdktn/provider-databricks.permissions.Permissions.property.appNameInput"></a>

```csharp
public string AppNameInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-databricks.permissions.Permissions.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ClusterPolicyIdInput`<sup>Optional</sup> <a name="ClusterPolicyIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.clusterPolicyIdInput"></a>

```csharp
public string ClusterPolicyIdInput { get; }
```

- *Type:* string

---

##### `DashboardIdInput`<sup>Optional</sup> <a name="DashboardIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.dashboardIdInput"></a>

```csharp
public string DashboardIdInput { get; }
```

- *Type:* string

---

##### `DatabaseInstanceNameInput`<sup>Optional</sup> <a name="DatabaseInstanceNameInput" id="@cdktn/provider-databricks.permissions.Permissions.property.databaseInstanceNameInput"></a>

```csharp
public string DatabaseInstanceNameInput { get; }
```

- *Type:* string

---

##### `DatabaseProjectNameInput`<sup>Optional</sup> <a name="DatabaseProjectNameInput" id="@cdktn/provider-databricks.permissions.Permissions.property.databaseProjectNameInput"></a>

```csharp
public string DatabaseProjectNameInput { get; }
```

- *Type:* string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `DirectoryPathInput`<sup>Optional</sup> <a name="DirectoryPathInput" id="@cdktn/provider-databricks.permissions.Permissions.property.directoryPathInput"></a>

```csharp
public string DirectoryPathInput { get; }
```

- *Type:* string

---

##### `ExperimentIdInput`<sup>Optional</sup> <a name="ExperimentIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.experimentIdInput"></a>

```csharp
public string ExperimentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstancePoolIdInput`<sup>Optional</sup> <a name="InstancePoolIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.instancePoolIdInput"></a>

```csharp
public string InstancePoolIdInput { get; }
```

- *Type:* string

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.jobIdInput"></a>

```csharp
public string JobIdInput { get; }
```

- *Type:* string

---

##### `KnowledgeAssistantIdInput`<sup>Optional</sup> <a name="KnowledgeAssistantIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.knowledgeAssistantIdInput"></a>

```csharp
public string KnowledgeAssistantIdInput { get; }
```

- *Type:* string

---

##### `NotebookIdInput`<sup>Optional</sup> <a name="NotebookIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.notebookIdInput"></a>

```csharp
public string NotebookIdInput { get; }
```

- *Type:* string

---

##### `NotebookPathInput`<sup>Optional</sup> <a name="NotebookPathInput" id="@cdktn/provider-databricks.permissions.Permissions.property.notebookPathInput"></a>

```csharp
public string NotebookPathInput { get; }
```

- *Type:* string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktn/provider-databricks.permissions.Permissions.property.objectTypeInput"></a>

```csharp
public string ObjectTypeInput { get; }
```

- *Type:* string

---

##### `PipelineIdInput`<sup>Optional</sup> <a name="PipelineIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.pipelineIdInput"></a>

```csharp
public string PipelineIdInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.permissions.Permissions.property.providerConfigInput"></a>

```csharp
public PermissionsProviderConfig ProviderConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfig">PermissionsProviderConfig</a>

---

##### `RegisteredModelIdInput`<sup>Optional</sup> <a name="RegisteredModelIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.registeredModelIdInput"></a>

```csharp
public string RegisteredModelIdInput { get; }
```

- *Type:* string

---

##### `RepoIdInput`<sup>Optional</sup> <a name="RepoIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.repoIdInput"></a>

```csharp
public string RepoIdInput { get; }
```

- *Type:* string

---

##### `RepoPathInput`<sup>Optional</sup> <a name="RepoPathInput" id="@cdktn/provider-databricks.permissions.Permissions.property.repoPathInput"></a>

```csharp
public string RepoPathInput { get; }
```

- *Type:* string

---

##### `ServingEndpointIdInput`<sup>Optional</sup> <a name="ServingEndpointIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.servingEndpointIdInput"></a>

```csharp
public string ServingEndpointIdInput { get; }
```

- *Type:* string

---

##### `SqlAlertIdInput`<sup>Optional</sup> <a name="SqlAlertIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.sqlAlertIdInput"></a>

```csharp
public string SqlAlertIdInput { get; }
```

- *Type:* string

---

##### `SqlDashboardIdInput`<sup>Optional</sup> <a name="SqlDashboardIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.sqlDashboardIdInput"></a>

```csharp
public string SqlDashboardIdInput { get; }
```

- *Type:* string

---

##### `SqlEndpointIdInput`<sup>Optional</sup> <a name="SqlEndpointIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.sqlEndpointIdInput"></a>

```csharp
public string SqlEndpointIdInput { get; }
```

- *Type:* string

---

##### `SqlQueryIdInput`<sup>Optional</sup> <a name="SqlQueryIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.sqlQueryIdInput"></a>

```csharp
public string SqlQueryIdInput { get; }
```

- *Type:* string

---

##### `SupervisorAgentIdInput`<sup>Optional</sup> <a name="SupervisorAgentIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.supervisorAgentIdInput"></a>

```csharp
public string SupervisorAgentIdInput { get; }
```

- *Type:* string

---

##### `VectorSearchEndpointIdInput`<sup>Optional</sup> <a name="VectorSearchEndpointIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.vectorSearchEndpointIdInput"></a>

```csharp
public string VectorSearchEndpointIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceFileIdInput`<sup>Optional</sup> <a name="WorkspaceFileIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.workspaceFileIdInput"></a>

```csharp
public string WorkspaceFileIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceFilePathInput`<sup>Optional</sup> <a name="WorkspaceFilePathInput" id="@cdktn/provider-databricks.permissions.Permissions.property.workspaceFilePathInput"></a>

```csharp
public string WorkspaceFilePathInput { get; }
```

- *Type:* string

---

##### `AlertV2Id`<sup>Required</sup> <a name="AlertV2Id" id="@cdktn/provider-databricks.permissions.Permissions.property.alertV2Id"></a>

```csharp
public string AlertV2Id { get; }
```

- *Type:* string

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktn/provider-databricks.permissions.Permissions.property.appName"></a>

```csharp
public string AppName { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-databricks.permissions.Permissions.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-databricks.permissions.Permissions.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ClusterPolicyId`<sup>Required</sup> <a name="ClusterPolicyId" id="@cdktn/provider-databricks.permissions.Permissions.property.clusterPolicyId"></a>

```csharp
public string ClusterPolicyId { get; }
```

- *Type:* string

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktn/provider-databricks.permissions.Permissions.property.dashboardId"></a>

```csharp
public string DashboardId { get; }
```

- *Type:* string

---

##### `DatabaseInstanceName`<sup>Required</sup> <a name="DatabaseInstanceName" id="@cdktn/provider-databricks.permissions.Permissions.property.databaseInstanceName"></a>

```csharp
public string DatabaseInstanceName { get; }
```

- *Type:* string

---

##### `DatabaseProjectName`<sup>Required</sup> <a name="DatabaseProjectName" id="@cdktn/provider-databricks.permissions.Permissions.property.databaseProjectName"></a>

```csharp
public string DatabaseProjectName { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-databricks.permissions.Permissions.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `DirectoryPath`<sup>Required</sup> <a name="DirectoryPath" id="@cdktn/provider-databricks.permissions.Permissions.property.directoryPath"></a>

```csharp
public string DirectoryPath { get; }
```

- *Type:* string

---

##### `ExperimentId`<sup>Required</sup> <a name="ExperimentId" id="@cdktn/provider-databricks.permissions.Permissions.property.experimentId"></a>

```csharp
public string ExperimentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.permissions.Permissions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstancePoolId`<sup>Required</sup> <a name="InstancePoolId" id="@cdktn/provider-databricks.permissions.Permissions.property.instancePoolId"></a>

```csharp
public string InstancePoolId { get; }
```

- *Type:* string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktn/provider-databricks.permissions.Permissions.property.jobId"></a>

```csharp
public string JobId { get; }
```

- *Type:* string

---

##### `KnowledgeAssistantId`<sup>Required</sup> <a name="KnowledgeAssistantId" id="@cdktn/provider-databricks.permissions.Permissions.property.knowledgeAssistantId"></a>

```csharp
public string KnowledgeAssistantId { get; }
```

- *Type:* string

---

##### `NotebookId`<sup>Required</sup> <a name="NotebookId" id="@cdktn/provider-databricks.permissions.Permissions.property.notebookId"></a>

```csharp
public string NotebookId { get; }
```

- *Type:* string

---

##### `NotebookPath`<sup>Required</sup> <a name="NotebookPath" id="@cdktn/provider-databricks.permissions.Permissions.property.notebookPath"></a>

```csharp
public string NotebookPath { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-databricks.permissions.Permissions.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-databricks.permissions.Permissions.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `RegisteredModelId`<sup>Required</sup> <a name="RegisteredModelId" id="@cdktn/provider-databricks.permissions.Permissions.property.registeredModelId"></a>

```csharp
public string RegisteredModelId { get; }
```

- *Type:* string

---

##### `RepoId`<sup>Required</sup> <a name="RepoId" id="@cdktn/provider-databricks.permissions.Permissions.property.repoId"></a>

```csharp
public string RepoId { get; }
```

- *Type:* string

---

##### `RepoPath`<sup>Required</sup> <a name="RepoPath" id="@cdktn/provider-databricks.permissions.Permissions.property.repoPath"></a>

```csharp
public string RepoPath { get; }
```

- *Type:* string

---

##### `ServingEndpointId`<sup>Required</sup> <a name="ServingEndpointId" id="@cdktn/provider-databricks.permissions.Permissions.property.servingEndpointId"></a>

```csharp
public string ServingEndpointId { get; }
```

- *Type:* string

---

##### `SqlAlertId`<sup>Required</sup> <a name="SqlAlertId" id="@cdktn/provider-databricks.permissions.Permissions.property.sqlAlertId"></a>

```csharp
public string SqlAlertId { get; }
```

- *Type:* string

---

##### `SqlDashboardId`<sup>Required</sup> <a name="SqlDashboardId" id="@cdktn/provider-databricks.permissions.Permissions.property.sqlDashboardId"></a>

```csharp
public string SqlDashboardId { get; }
```

- *Type:* string

---

##### `SqlEndpointId`<sup>Required</sup> <a name="SqlEndpointId" id="@cdktn/provider-databricks.permissions.Permissions.property.sqlEndpointId"></a>

```csharp
public string SqlEndpointId { get; }
```

- *Type:* string

---

##### `SqlQueryId`<sup>Required</sup> <a name="SqlQueryId" id="@cdktn/provider-databricks.permissions.Permissions.property.sqlQueryId"></a>

```csharp
public string SqlQueryId { get; }
```

- *Type:* string

---

##### `SupervisorAgentId`<sup>Required</sup> <a name="SupervisorAgentId" id="@cdktn/provider-databricks.permissions.Permissions.property.supervisorAgentId"></a>

```csharp
public string SupervisorAgentId { get; }
```

- *Type:* string

---

##### `VectorSearchEndpointId`<sup>Required</sup> <a name="VectorSearchEndpointId" id="@cdktn/provider-databricks.permissions.Permissions.property.vectorSearchEndpointId"></a>

```csharp
public string VectorSearchEndpointId { get; }
```

- *Type:* string

---

##### `WorkspaceFileId`<sup>Required</sup> <a name="WorkspaceFileId" id="@cdktn/provider-databricks.permissions.Permissions.property.workspaceFileId"></a>

```csharp
public string WorkspaceFileId { get; }
```

- *Type:* string

---

##### `WorkspaceFilePath`<sup>Required</sup> <a name="WorkspaceFilePath" id="@cdktn/provider-databricks.permissions.Permissions.property.workspaceFilePath"></a>

```csharp
public string WorkspaceFilePath { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.permissions.Permissions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PermissionsAccessControl <a name="PermissionsAccessControl" id="@cdktn/provider-databricks.permissions.PermissionsAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.permissions.PermissionsAccessControl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PermissionsAccessControl {
    string GroupName = null,
    string PermissionLevel = null,
    string ServicePrincipalName = null,
    string UserName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControl.property.groupName">GroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#group_name Permissions#group_name}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControl.property.permissionLevel">PermissionLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#permission_level Permissions#permission_level}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControl.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#service_principal_name Permissions#service_principal_name}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControl.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#user_name Permissions#user_name}. |

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControl.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#group_name Permissions#group_name}.

---

##### `PermissionLevel`<sup>Optional</sup> <a name="PermissionLevel" id="@cdktn/provider-databricks.permissions.PermissionsAccessControl.property.permissionLevel"></a>

```csharp
public string PermissionLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#permission_level Permissions#permission_level}.

---

##### `ServicePrincipalName`<sup>Optional</sup> <a name="ServicePrincipalName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControl.property.servicePrincipalName"></a>

```csharp
public string ServicePrincipalName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#service_principal_name Permissions#service_principal_name}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControl.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#user_name Permissions#user_name}.

---

### PermissionsConfig <a name="PermissionsConfig" id="@cdktn/provider-databricks.permissions.PermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.permissions.PermissionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PermissionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|PermissionsAccessControl[] AccessControl,
    string AlertV2Id = null,
    string AppName = null,
    string Authorization = null,
    string ClusterId = null,
    string ClusterPolicyId = null,
    string DashboardId = null,
    string DatabaseInstanceName = null,
    string DatabaseProjectName = null,
    string DirectoryId = null,
    string DirectoryPath = null,
    string ExperimentId = null,
    string Id = null,
    string InstancePoolId = null,
    string JobId = null,
    string KnowledgeAssistantId = null,
    string NotebookId = null,
    string NotebookPath = null,
    string ObjectType = null,
    string PipelineId = null,
    PermissionsProviderConfig ProviderConfig = null,
    string RegisteredModelId = null,
    string RepoId = null,
    string RepoPath = null,
    string ServingEndpointId = null,
    string SqlAlertId = null,
    string SqlDashboardId = null,
    string SqlEndpointId = null,
    string SqlQueryId = null,
    string SupervisorAgentId = null,
    string VectorSearchEndpointId = null,
    string WorkspaceFileId = null,
    string WorkspaceFilePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.accessControl">AccessControl</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>[]</code> | access_control block. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.alertV2Id">AlertV2Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#alert_v2_id Permissions#alert_v2_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.appName">AppName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#app_name Permissions#app_name}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#authorization Permissions#authorization}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#cluster_id Permissions#cluster_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.clusterPolicyId">ClusterPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#cluster_policy_id Permissions#cluster_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.dashboardId">DashboardId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#dashboard_id Permissions#dashboard_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#database_instance_name Permissions#database_instance_name}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.databaseProjectName">DatabaseProjectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#database_project_name Permissions#database_project_name}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#directory_id Permissions#directory_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.directoryPath">DirectoryPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#directory_path Permissions#directory_path}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.experimentId">ExperimentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#experiment_id Permissions#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#id Permissions#id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.instancePoolId">InstancePoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#instance_pool_id Permissions#instance_pool_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.jobId">JobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#job_id Permissions#job_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.knowledgeAssistantId">KnowledgeAssistantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#knowledge_assistant_id Permissions#knowledge_assistant_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.notebookId">NotebookId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#notebook_id Permissions#notebook_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.notebookPath">NotebookPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#notebook_path Permissions#notebook_path}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.objectType">ObjectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#object_type Permissions#object_type}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.pipelineId">PipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#pipeline_id Permissions#pipeline_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfig">PermissionsProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.registeredModelId">RegisteredModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#registered_model_id Permissions#registered_model_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.repoId">RepoId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#repo_id Permissions#repo_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.repoPath">RepoPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#repo_path Permissions#repo_path}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.servingEndpointId">ServingEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#serving_endpoint_id Permissions#serving_endpoint_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.sqlAlertId">SqlAlertId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#sql_alert_id Permissions#sql_alert_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.sqlDashboardId">SqlDashboardId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#sql_dashboard_id Permissions#sql_dashboard_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.sqlEndpointId">SqlEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#sql_endpoint_id Permissions#sql_endpoint_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.sqlQueryId">SqlQueryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#sql_query_id Permissions#sql_query_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.supervisorAgentId">SupervisorAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#supervisor_agent_id Permissions#supervisor_agent_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.vectorSearchEndpointId">VectorSearchEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#vector_search_endpoint_id Permissions#vector_search_endpoint_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.workspaceFileId">WorkspaceFileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#workspace_file_id Permissions#workspace_file_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.workspaceFilePath">WorkspaceFilePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#workspace_file_path Permissions#workspace_file_path}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessControl`<sup>Required</sup> <a name="AccessControl" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.accessControl"></a>

```csharp
public IResolvable|PermissionsAccessControl[] AccessControl { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>[]

access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#access_control Permissions#access_control}

---

##### `AlertV2Id`<sup>Optional</sup> <a name="AlertV2Id" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.alertV2Id"></a>

```csharp
public string AlertV2Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#alert_v2_id Permissions#alert_v2_id}.

---

##### `AppName`<sup>Optional</sup> <a name="AppName" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.appName"></a>

```csharp
public string AppName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#app_name Permissions#app_name}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#authorization Permissions#authorization}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#cluster_id Permissions#cluster_id}.

---

##### `ClusterPolicyId`<sup>Optional</sup> <a name="ClusterPolicyId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.clusterPolicyId"></a>

```csharp
public string ClusterPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#cluster_policy_id Permissions#cluster_policy_id}.

---

##### `DashboardId`<sup>Optional</sup> <a name="DashboardId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.dashboardId"></a>

```csharp
public string DashboardId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#dashboard_id Permissions#dashboard_id}.

---

##### `DatabaseInstanceName`<sup>Optional</sup> <a name="DatabaseInstanceName" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.databaseInstanceName"></a>

```csharp
public string DatabaseInstanceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#database_instance_name Permissions#database_instance_name}.

---

##### `DatabaseProjectName`<sup>Optional</sup> <a name="DatabaseProjectName" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.databaseProjectName"></a>

```csharp
public string DatabaseProjectName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#database_project_name Permissions#database_project_name}.

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#directory_id Permissions#directory_id}.

---

##### `DirectoryPath`<sup>Optional</sup> <a name="DirectoryPath" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.directoryPath"></a>

```csharp
public string DirectoryPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#directory_path Permissions#directory_path}.

---

##### `ExperimentId`<sup>Optional</sup> <a name="ExperimentId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.experimentId"></a>

```csharp
public string ExperimentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#experiment_id Permissions#experiment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#id Permissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstancePoolId`<sup>Optional</sup> <a name="InstancePoolId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.instancePoolId"></a>

```csharp
public string InstancePoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#instance_pool_id Permissions#instance_pool_id}.

---

##### `JobId`<sup>Optional</sup> <a name="JobId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.jobId"></a>

```csharp
public string JobId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#job_id Permissions#job_id}.

---

##### `KnowledgeAssistantId`<sup>Optional</sup> <a name="KnowledgeAssistantId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.knowledgeAssistantId"></a>

```csharp
public string KnowledgeAssistantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#knowledge_assistant_id Permissions#knowledge_assistant_id}.

---

##### `NotebookId`<sup>Optional</sup> <a name="NotebookId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.notebookId"></a>

```csharp
public string NotebookId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#notebook_id Permissions#notebook_id}.

---

##### `NotebookPath`<sup>Optional</sup> <a name="NotebookPath" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.notebookPath"></a>

```csharp
public string NotebookPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#notebook_path Permissions#notebook_path}.

---

##### `ObjectType`<sup>Optional</sup> <a name="ObjectType" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.objectType"></a>

```csharp
public string ObjectType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#object_type Permissions#object_type}.

---

##### `PipelineId`<sup>Optional</sup> <a name="PipelineId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.pipelineId"></a>

```csharp
public string PipelineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#pipeline_id Permissions#pipeline_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.providerConfig"></a>

```csharp
public PermissionsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfig">PermissionsProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#provider_config Permissions#provider_config}

---

##### `RegisteredModelId`<sup>Optional</sup> <a name="RegisteredModelId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.registeredModelId"></a>

```csharp
public string RegisteredModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#registered_model_id Permissions#registered_model_id}.

---

##### `RepoId`<sup>Optional</sup> <a name="RepoId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.repoId"></a>

```csharp
public string RepoId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#repo_id Permissions#repo_id}.

---

##### `RepoPath`<sup>Optional</sup> <a name="RepoPath" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.repoPath"></a>

```csharp
public string RepoPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#repo_path Permissions#repo_path}.

---

##### `ServingEndpointId`<sup>Optional</sup> <a name="ServingEndpointId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.servingEndpointId"></a>

```csharp
public string ServingEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#serving_endpoint_id Permissions#serving_endpoint_id}.

---

##### `SqlAlertId`<sup>Optional</sup> <a name="SqlAlertId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.sqlAlertId"></a>

```csharp
public string SqlAlertId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#sql_alert_id Permissions#sql_alert_id}.

---

##### `SqlDashboardId`<sup>Optional</sup> <a name="SqlDashboardId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.sqlDashboardId"></a>

```csharp
public string SqlDashboardId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#sql_dashboard_id Permissions#sql_dashboard_id}.

---

##### `SqlEndpointId`<sup>Optional</sup> <a name="SqlEndpointId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.sqlEndpointId"></a>

```csharp
public string SqlEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#sql_endpoint_id Permissions#sql_endpoint_id}.

---

##### `SqlQueryId`<sup>Optional</sup> <a name="SqlQueryId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.sqlQueryId"></a>

```csharp
public string SqlQueryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#sql_query_id Permissions#sql_query_id}.

---

##### `SupervisorAgentId`<sup>Optional</sup> <a name="SupervisorAgentId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.supervisorAgentId"></a>

```csharp
public string SupervisorAgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#supervisor_agent_id Permissions#supervisor_agent_id}.

---

##### `VectorSearchEndpointId`<sup>Optional</sup> <a name="VectorSearchEndpointId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.vectorSearchEndpointId"></a>

```csharp
public string VectorSearchEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#vector_search_endpoint_id Permissions#vector_search_endpoint_id}.

---

##### `WorkspaceFileId`<sup>Optional</sup> <a name="WorkspaceFileId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.workspaceFileId"></a>

```csharp
public string WorkspaceFileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#workspace_file_id Permissions#workspace_file_id}.

---

##### `WorkspaceFilePath`<sup>Optional</sup> <a name="WorkspaceFilePath" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.workspaceFilePath"></a>

```csharp
public string WorkspaceFilePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#workspace_file_path Permissions#workspace_file_path}.

---

### PermissionsProviderConfig <a name="PermissionsProviderConfig" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PermissionsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#workspace_id Permissions#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/permissions#workspace_id Permissions#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### PermissionsAccessControlList <a name="PermissionsAccessControlList" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PermissionsAccessControlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.get"></a>

```csharp
private PermissionsAccessControlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.property.internalValue"></a>

```csharp
public IResolvable|PermissionsAccessControl[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>[]

---


### PermissionsAccessControlOutputReference <a name="PermissionsAccessControlOutputReference" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PermissionsAccessControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetPermissionLevel">ResetPermissionLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetServicePrincipalName">ResetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetGroupName"></a>

```csharp
private void ResetGroupName()
```

##### `ResetPermissionLevel` <a name="ResetPermissionLevel" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetPermissionLevel"></a>

```csharp
private void ResetPermissionLevel()
```

##### `ResetServicePrincipalName` <a name="ResetServicePrincipalName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetServicePrincipalName"></a>

```csharp
private void ResetServicePrincipalName()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetUserName"></a>

```csharp
private void ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevelInput">PermissionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalNameInput">ServicePrincipalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevel">PermissionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `PermissionLevelInput`<sup>Optional</sup> <a name="PermissionLevelInput" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevelInput"></a>

```csharp
public string PermissionLevelInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalNameInput`<sup>Optional</sup> <a name="ServicePrincipalNameInput" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalNameInput"></a>

```csharp
public string ServicePrincipalNameInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `PermissionLevel`<sup>Required</sup> <a name="PermissionLevel" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevel"></a>

```csharp
public string PermissionLevel { get; }
```

- *Type:* string

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalName"></a>

```csharp
public string ServicePrincipalName { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PermissionsAccessControl InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControl">PermissionsAccessControl</a>

---


### PermissionsProviderConfigOutputReference <a name="PermissionsProviderConfigOutputReference" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PermissionsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfig">PermissionsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public PermissionsProviderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfig">PermissionsProviderConfig</a>

---



