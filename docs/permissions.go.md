# `permissions` Submodule <a name="`permissions` Submodule" id="@cdktn/provider-databricks.permissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Permissions <a name="Permissions" id="@cdktn/provider-databricks.permissions.Permissions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions databricks_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.permissions.Permissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/permissions"

permissions.NewPermissions(scope Construct, id *string, config PermissionsConfig) Permissions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig">PermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.permissions.Permissions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.permissions.Permissions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.permissions.Permissions.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.permissions.Permissions.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.permissions.Permissions.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.permissions.Permissions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.permissions.Permissions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.permissions.Permissions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.permissions.Permissions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.permissions.Permissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.permissions.Permissions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.permissions.Permissions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.permissions.Permissions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.permissions.Permissions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.permissions.Permissions.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.permissions.Permissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.permissions.Permissions.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.permissions.Permissions.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.permissions.Permissions.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.permissions.Permissions.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.permissions.Permissions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.Permissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.permissions.Permissions.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.permissions.Permissions.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.permissions.Permissions.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.permissions.Permissions.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.permissions.Permissions.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.permissions.Permissions.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.permissions.Permissions.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessControl` <a name="PutAccessControl" id="@cdktn/provider-databricks.permissions.Permissions.putAccessControl"></a>

```go
func PutAccessControl(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.permissions.Permissions.putAccessControl.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.permissions.Permissions.putProviderConfig"></a>

```go
func PutProviderConfig(value PermissionsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.permissions.Permissions.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfig">PermissionsProviderConfig</a>

---

##### `ResetAlertV2Id` <a name="ResetAlertV2Id" id="@cdktn/provider-databricks.permissions.Permissions.resetAlertV2Id"></a>

```go
func ResetAlertV2Id()
```

##### `ResetAppName` <a name="ResetAppName" id="@cdktn/provider-databricks.permissions.Permissions.resetAppName"></a>

```go
func ResetAppName()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktn/provider-databricks.permissions.Permissions.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktn/provider-databricks.permissions.Permissions.resetClusterId"></a>

```go
func ResetClusterId()
```

##### `ResetClusterPolicyId` <a name="ResetClusterPolicyId" id="@cdktn/provider-databricks.permissions.Permissions.resetClusterPolicyId"></a>

```go
func ResetClusterPolicyId()
```

##### `ResetDashboardId` <a name="ResetDashboardId" id="@cdktn/provider-databricks.permissions.Permissions.resetDashboardId"></a>

```go
func ResetDashboardId()
```

##### `ResetDatabaseInstanceName` <a name="ResetDatabaseInstanceName" id="@cdktn/provider-databricks.permissions.Permissions.resetDatabaseInstanceName"></a>

```go
func ResetDatabaseInstanceName()
```

##### `ResetDatabaseProjectName` <a name="ResetDatabaseProjectName" id="@cdktn/provider-databricks.permissions.Permissions.resetDatabaseProjectName"></a>

```go
func ResetDatabaseProjectName()
```

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktn/provider-databricks.permissions.Permissions.resetDirectoryId"></a>

```go
func ResetDirectoryId()
```

##### `ResetDirectoryPath` <a name="ResetDirectoryPath" id="@cdktn/provider-databricks.permissions.Permissions.resetDirectoryPath"></a>

```go
func ResetDirectoryPath()
```

##### `ResetExperimentId` <a name="ResetExperimentId" id="@cdktn/provider-databricks.permissions.Permissions.resetExperimentId"></a>

```go
func ResetExperimentId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.permissions.Permissions.resetId"></a>

```go
func ResetId()
```

##### `ResetInstancePoolId` <a name="ResetInstancePoolId" id="@cdktn/provider-databricks.permissions.Permissions.resetInstancePoolId"></a>

```go
func ResetInstancePoolId()
```

##### `ResetJobId` <a name="ResetJobId" id="@cdktn/provider-databricks.permissions.Permissions.resetJobId"></a>

```go
func ResetJobId()
```

##### `ResetKnowledgeAssistantId` <a name="ResetKnowledgeAssistantId" id="@cdktn/provider-databricks.permissions.Permissions.resetKnowledgeAssistantId"></a>

```go
func ResetKnowledgeAssistantId()
```

##### `ResetNotebookId` <a name="ResetNotebookId" id="@cdktn/provider-databricks.permissions.Permissions.resetNotebookId"></a>

```go
func ResetNotebookId()
```

##### `ResetNotebookPath` <a name="ResetNotebookPath" id="@cdktn/provider-databricks.permissions.Permissions.resetNotebookPath"></a>

```go
func ResetNotebookPath()
```

##### `ResetObjectType` <a name="ResetObjectType" id="@cdktn/provider-databricks.permissions.Permissions.resetObjectType"></a>

```go
func ResetObjectType()
```

##### `ResetPipelineId` <a name="ResetPipelineId" id="@cdktn/provider-databricks.permissions.Permissions.resetPipelineId"></a>

```go
func ResetPipelineId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.permissions.Permissions.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetRegisteredModelId` <a name="ResetRegisteredModelId" id="@cdktn/provider-databricks.permissions.Permissions.resetRegisteredModelId"></a>

```go
func ResetRegisteredModelId()
```

##### `ResetRepoId` <a name="ResetRepoId" id="@cdktn/provider-databricks.permissions.Permissions.resetRepoId"></a>

```go
func ResetRepoId()
```

##### `ResetRepoPath` <a name="ResetRepoPath" id="@cdktn/provider-databricks.permissions.Permissions.resetRepoPath"></a>

```go
func ResetRepoPath()
```

##### `ResetServingEndpointId` <a name="ResetServingEndpointId" id="@cdktn/provider-databricks.permissions.Permissions.resetServingEndpointId"></a>

```go
func ResetServingEndpointId()
```

##### `ResetSqlAlertId` <a name="ResetSqlAlertId" id="@cdktn/provider-databricks.permissions.Permissions.resetSqlAlertId"></a>

```go
func ResetSqlAlertId()
```

##### `ResetSqlDashboardId` <a name="ResetSqlDashboardId" id="@cdktn/provider-databricks.permissions.Permissions.resetSqlDashboardId"></a>

```go
func ResetSqlDashboardId()
```

##### `ResetSqlEndpointId` <a name="ResetSqlEndpointId" id="@cdktn/provider-databricks.permissions.Permissions.resetSqlEndpointId"></a>

```go
func ResetSqlEndpointId()
```

##### `ResetSqlQueryId` <a name="ResetSqlQueryId" id="@cdktn/provider-databricks.permissions.Permissions.resetSqlQueryId"></a>

```go
func ResetSqlQueryId()
```

##### `ResetSupervisorAgentId` <a name="ResetSupervisorAgentId" id="@cdktn/provider-databricks.permissions.Permissions.resetSupervisorAgentId"></a>

```go
func ResetSupervisorAgentId()
```

##### `ResetVectorSearchEndpointId` <a name="ResetVectorSearchEndpointId" id="@cdktn/provider-databricks.permissions.Permissions.resetVectorSearchEndpointId"></a>

```go
func ResetVectorSearchEndpointId()
```

##### `ResetWorkspaceFileId` <a name="ResetWorkspaceFileId" id="@cdktn/provider-databricks.permissions.Permissions.resetWorkspaceFileId"></a>

```go
func ResetWorkspaceFileId()
```

##### `ResetWorkspaceFilePath` <a name="ResetWorkspaceFilePath" id="@cdktn/provider-databricks.permissions.Permissions.resetWorkspaceFilePath"></a>

```go
func ResetWorkspaceFilePath()
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

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/permissions"

permissions.Permissions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.permissions.Permissions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.permissions.Permissions.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/permissions"

permissions.Permissions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.permissions.Permissions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.permissions.Permissions.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/permissions"

permissions.Permissions_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.permissions.Permissions.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.permissions.Permissions.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/permissions"

permissions.Permissions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Permissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Permissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Permissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.permissions.Permissions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Permissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.accessControl">AccessControl</a></code> | <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList">PermissionsAccessControlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference">PermissionsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.accessControlInput">AccessControlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.alertV2IdInput">AlertV2IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.appNameInput">AppNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.clusterPolicyIdInput">ClusterPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.dashboardIdInput">DashboardIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.databaseInstanceNameInput">DatabaseInstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.databaseProjectNameInput">DatabaseProjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.directoryIdInput">DirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.directoryPathInput">DirectoryPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.experimentIdInput">ExperimentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.instancePoolIdInput">InstancePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.jobIdInput">JobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.knowledgeAssistantIdInput">KnowledgeAssistantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.notebookIdInput">NotebookIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.notebookPathInput">NotebookPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.objectTypeInput">ObjectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.pipelineIdInput">PipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfig">PermissionsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.registeredModelIdInput">RegisteredModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.repoIdInput">RepoIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.repoPathInput">RepoPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.servingEndpointIdInput">ServingEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.sqlAlertIdInput">SqlAlertIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.sqlDashboardIdInput">SqlDashboardIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.sqlEndpointIdInput">SqlEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.sqlQueryIdInput">SqlQueryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.supervisorAgentIdInput">SupervisorAgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.vectorSearchEndpointIdInput">VectorSearchEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.workspaceFileIdInput">WorkspaceFileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.workspaceFilePathInput">WorkspaceFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.alertV2Id">AlertV2Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.appName">AppName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.clusterPolicyId">ClusterPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.dashboardId">DashboardId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.databaseProjectName">DatabaseProjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.directoryPath">DirectoryPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.experimentId">ExperimentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.instancePoolId">InstancePoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.knowledgeAssistantId">KnowledgeAssistantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.notebookId">NotebookId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.notebookPath">NotebookPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.registeredModelId">RegisteredModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.repoId">RepoId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.repoPath">RepoPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.servingEndpointId">ServingEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.sqlAlertId">SqlAlertId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.sqlDashboardId">SqlDashboardId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.sqlEndpointId">SqlEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.sqlQueryId">SqlQueryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.supervisorAgentId">SupervisorAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.vectorSearchEndpointId">VectorSearchEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.workspaceFileId">WorkspaceFileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.workspaceFilePath">WorkspaceFilePath</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.permissions.Permissions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.permissions.Permissions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.permissions.Permissions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.permissions.Permissions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.permissions.Permissions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.permissions.Permissions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.permissions.Permissions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.permissions.Permissions.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.permissions.Permissions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.permissions.Permissions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.permissions.Permissions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.permissions.Permissions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.permissions.Permissions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.permissions.Permissions.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessControl`<sup>Required</sup> <a name="AccessControl" id="@cdktn/provider-databricks.permissions.Permissions.property.accessControl"></a>

```go
func AccessControl() PermissionsAccessControlList
```

- *Type:* <a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList">PermissionsAccessControlList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.permissions.Permissions.property.providerConfig"></a>

```go
func ProviderConfig() PermissionsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference">PermissionsProviderConfigOutputReference</a>

---

##### `AccessControlInput`<sup>Optional</sup> <a name="AccessControlInput" id="@cdktn/provider-databricks.permissions.Permissions.property.accessControlInput"></a>

```go
func AccessControlInput() interface{}
```

- *Type:* interface{}

---

##### `AlertV2IdInput`<sup>Optional</sup> <a name="AlertV2IdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.alertV2IdInput"></a>

```go
func AlertV2IdInput() *string
```

- *Type:* *string

---

##### `AppNameInput`<sup>Optional</sup> <a name="AppNameInput" id="@cdktn/provider-databricks.permissions.Permissions.property.appNameInput"></a>

```go
func AppNameInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-databricks.permissions.Permissions.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ClusterPolicyIdInput`<sup>Optional</sup> <a name="ClusterPolicyIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.clusterPolicyIdInput"></a>

```go
func ClusterPolicyIdInput() *string
```

- *Type:* *string

---

##### `DashboardIdInput`<sup>Optional</sup> <a name="DashboardIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.dashboardIdInput"></a>

```go
func DashboardIdInput() *string
```

- *Type:* *string

---

##### `DatabaseInstanceNameInput`<sup>Optional</sup> <a name="DatabaseInstanceNameInput" id="@cdktn/provider-databricks.permissions.Permissions.property.databaseInstanceNameInput"></a>

```go
func DatabaseInstanceNameInput() *string
```

- *Type:* *string

---

##### `DatabaseProjectNameInput`<sup>Optional</sup> <a name="DatabaseProjectNameInput" id="@cdktn/provider-databricks.permissions.Permissions.property.databaseProjectNameInput"></a>

```go
func DatabaseProjectNameInput() *string
```

- *Type:* *string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.directoryIdInput"></a>

```go
func DirectoryIdInput() *string
```

- *Type:* *string

---

##### `DirectoryPathInput`<sup>Optional</sup> <a name="DirectoryPathInput" id="@cdktn/provider-databricks.permissions.Permissions.property.directoryPathInput"></a>

```go
func DirectoryPathInput() *string
```

- *Type:* *string

---

##### `ExperimentIdInput`<sup>Optional</sup> <a name="ExperimentIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.experimentIdInput"></a>

```go
func ExperimentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstancePoolIdInput`<sup>Optional</sup> <a name="InstancePoolIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.instancePoolIdInput"></a>

```go
func InstancePoolIdInput() *string
```

- *Type:* *string

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.jobIdInput"></a>

```go
func JobIdInput() *string
```

- *Type:* *string

---

##### `KnowledgeAssistantIdInput`<sup>Optional</sup> <a name="KnowledgeAssistantIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.knowledgeAssistantIdInput"></a>

```go
func KnowledgeAssistantIdInput() *string
```

- *Type:* *string

---

##### `NotebookIdInput`<sup>Optional</sup> <a name="NotebookIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.notebookIdInput"></a>

```go
func NotebookIdInput() *string
```

- *Type:* *string

---

##### `NotebookPathInput`<sup>Optional</sup> <a name="NotebookPathInput" id="@cdktn/provider-databricks.permissions.Permissions.property.notebookPathInput"></a>

```go
func NotebookPathInput() *string
```

- *Type:* *string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktn/provider-databricks.permissions.Permissions.property.objectTypeInput"></a>

```go
func ObjectTypeInput() *string
```

- *Type:* *string

---

##### `PipelineIdInput`<sup>Optional</sup> <a name="PipelineIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.pipelineIdInput"></a>

```go
func PipelineIdInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.permissions.Permissions.property.providerConfigInput"></a>

```go
func ProviderConfigInput() PermissionsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfig">PermissionsProviderConfig</a>

---

##### `RegisteredModelIdInput`<sup>Optional</sup> <a name="RegisteredModelIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.registeredModelIdInput"></a>

```go
func RegisteredModelIdInput() *string
```

- *Type:* *string

---

##### `RepoIdInput`<sup>Optional</sup> <a name="RepoIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.repoIdInput"></a>

```go
func RepoIdInput() *string
```

- *Type:* *string

---

##### `RepoPathInput`<sup>Optional</sup> <a name="RepoPathInput" id="@cdktn/provider-databricks.permissions.Permissions.property.repoPathInput"></a>

```go
func RepoPathInput() *string
```

- *Type:* *string

---

##### `ServingEndpointIdInput`<sup>Optional</sup> <a name="ServingEndpointIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.servingEndpointIdInput"></a>

```go
func ServingEndpointIdInput() *string
```

- *Type:* *string

---

##### `SqlAlertIdInput`<sup>Optional</sup> <a name="SqlAlertIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.sqlAlertIdInput"></a>

```go
func SqlAlertIdInput() *string
```

- *Type:* *string

---

##### `SqlDashboardIdInput`<sup>Optional</sup> <a name="SqlDashboardIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.sqlDashboardIdInput"></a>

```go
func SqlDashboardIdInput() *string
```

- *Type:* *string

---

##### `SqlEndpointIdInput`<sup>Optional</sup> <a name="SqlEndpointIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.sqlEndpointIdInput"></a>

```go
func SqlEndpointIdInput() *string
```

- *Type:* *string

---

##### `SqlQueryIdInput`<sup>Optional</sup> <a name="SqlQueryIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.sqlQueryIdInput"></a>

```go
func SqlQueryIdInput() *string
```

- *Type:* *string

---

##### `SupervisorAgentIdInput`<sup>Optional</sup> <a name="SupervisorAgentIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.supervisorAgentIdInput"></a>

```go
func SupervisorAgentIdInput() *string
```

- *Type:* *string

---

##### `VectorSearchEndpointIdInput`<sup>Optional</sup> <a name="VectorSearchEndpointIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.vectorSearchEndpointIdInput"></a>

```go
func VectorSearchEndpointIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceFileIdInput`<sup>Optional</sup> <a name="WorkspaceFileIdInput" id="@cdktn/provider-databricks.permissions.Permissions.property.workspaceFileIdInput"></a>

```go
func WorkspaceFileIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceFilePathInput`<sup>Optional</sup> <a name="WorkspaceFilePathInput" id="@cdktn/provider-databricks.permissions.Permissions.property.workspaceFilePathInput"></a>

```go
func WorkspaceFilePathInput() *string
```

- *Type:* *string

---

##### `AlertV2Id`<sup>Required</sup> <a name="AlertV2Id" id="@cdktn/provider-databricks.permissions.Permissions.property.alertV2Id"></a>

```go
func AlertV2Id() *string
```

- *Type:* *string

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktn/provider-databricks.permissions.Permissions.property.appName"></a>

```go
func AppName() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-databricks.permissions.Permissions.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-databricks.permissions.Permissions.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ClusterPolicyId`<sup>Required</sup> <a name="ClusterPolicyId" id="@cdktn/provider-databricks.permissions.Permissions.property.clusterPolicyId"></a>

```go
func ClusterPolicyId() *string
```

- *Type:* *string

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktn/provider-databricks.permissions.Permissions.property.dashboardId"></a>

```go
func DashboardId() *string
```

- *Type:* *string

---

##### `DatabaseInstanceName`<sup>Required</sup> <a name="DatabaseInstanceName" id="@cdktn/provider-databricks.permissions.Permissions.property.databaseInstanceName"></a>

```go
func DatabaseInstanceName() *string
```

- *Type:* *string

---

##### `DatabaseProjectName`<sup>Required</sup> <a name="DatabaseProjectName" id="@cdktn/provider-databricks.permissions.Permissions.property.databaseProjectName"></a>

```go
func DatabaseProjectName() *string
```

- *Type:* *string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-databricks.permissions.Permissions.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `DirectoryPath`<sup>Required</sup> <a name="DirectoryPath" id="@cdktn/provider-databricks.permissions.Permissions.property.directoryPath"></a>

```go
func DirectoryPath() *string
```

- *Type:* *string

---

##### `ExperimentId`<sup>Required</sup> <a name="ExperimentId" id="@cdktn/provider-databricks.permissions.Permissions.property.experimentId"></a>

```go
func ExperimentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.permissions.Permissions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstancePoolId`<sup>Required</sup> <a name="InstancePoolId" id="@cdktn/provider-databricks.permissions.Permissions.property.instancePoolId"></a>

```go
func InstancePoolId() *string
```

- *Type:* *string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktn/provider-databricks.permissions.Permissions.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `KnowledgeAssistantId`<sup>Required</sup> <a name="KnowledgeAssistantId" id="@cdktn/provider-databricks.permissions.Permissions.property.knowledgeAssistantId"></a>

```go
func KnowledgeAssistantId() *string
```

- *Type:* *string

---

##### `NotebookId`<sup>Required</sup> <a name="NotebookId" id="@cdktn/provider-databricks.permissions.Permissions.property.notebookId"></a>

```go
func NotebookId() *string
```

- *Type:* *string

---

##### `NotebookPath`<sup>Required</sup> <a name="NotebookPath" id="@cdktn/provider-databricks.permissions.Permissions.property.notebookPath"></a>

```go
func NotebookPath() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-databricks.permissions.Permissions.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-databricks.permissions.Permissions.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `RegisteredModelId`<sup>Required</sup> <a name="RegisteredModelId" id="@cdktn/provider-databricks.permissions.Permissions.property.registeredModelId"></a>

```go
func RegisteredModelId() *string
```

- *Type:* *string

---

##### `RepoId`<sup>Required</sup> <a name="RepoId" id="@cdktn/provider-databricks.permissions.Permissions.property.repoId"></a>

```go
func RepoId() *string
```

- *Type:* *string

---

##### `RepoPath`<sup>Required</sup> <a name="RepoPath" id="@cdktn/provider-databricks.permissions.Permissions.property.repoPath"></a>

```go
func RepoPath() *string
```

- *Type:* *string

---

##### `ServingEndpointId`<sup>Required</sup> <a name="ServingEndpointId" id="@cdktn/provider-databricks.permissions.Permissions.property.servingEndpointId"></a>

```go
func ServingEndpointId() *string
```

- *Type:* *string

---

##### `SqlAlertId`<sup>Required</sup> <a name="SqlAlertId" id="@cdktn/provider-databricks.permissions.Permissions.property.sqlAlertId"></a>

```go
func SqlAlertId() *string
```

- *Type:* *string

---

##### `SqlDashboardId`<sup>Required</sup> <a name="SqlDashboardId" id="@cdktn/provider-databricks.permissions.Permissions.property.sqlDashboardId"></a>

```go
func SqlDashboardId() *string
```

- *Type:* *string

---

##### `SqlEndpointId`<sup>Required</sup> <a name="SqlEndpointId" id="@cdktn/provider-databricks.permissions.Permissions.property.sqlEndpointId"></a>

```go
func SqlEndpointId() *string
```

- *Type:* *string

---

##### `SqlQueryId`<sup>Required</sup> <a name="SqlQueryId" id="@cdktn/provider-databricks.permissions.Permissions.property.sqlQueryId"></a>

```go
func SqlQueryId() *string
```

- *Type:* *string

---

##### `SupervisorAgentId`<sup>Required</sup> <a name="SupervisorAgentId" id="@cdktn/provider-databricks.permissions.Permissions.property.supervisorAgentId"></a>

```go
func SupervisorAgentId() *string
```

- *Type:* *string

---

##### `VectorSearchEndpointId`<sup>Required</sup> <a name="VectorSearchEndpointId" id="@cdktn/provider-databricks.permissions.Permissions.property.vectorSearchEndpointId"></a>

```go
func VectorSearchEndpointId() *string
```

- *Type:* *string

---

##### `WorkspaceFileId`<sup>Required</sup> <a name="WorkspaceFileId" id="@cdktn/provider-databricks.permissions.Permissions.property.workspaceFileId"></a>

```go
func WorkspaceFileId() *string
```

- *Type:* *string

---

##### `WorkspaceFilePath`<sup>Required</sup> <a name="WorkspaceFilePath" id="@cdktn/provider-databricks.permissions.Permissions.property.workspaceFilePath"></a>

```go
func WorkspaceFilePath() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.Permissions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.permissions.Permissions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PermissionsAccessControl <a name="PermissionsAccessControl" id="@cdktn/provider-databricks.permissions.PermissionsAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.permissions.PermissionsAccessControl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/permissions"

&permissions.PermissionsAccessControl {
	GroupName: *string,
	PermissionLevel: *string,
	ServicePrincipalName: *string,
	UserName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControl.property.groupName">GroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#group_name Permissions#group_name}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControl.property.permissionLevel">PermissionLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#permission_level Permissions#permission_level}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControl.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#service_principal_name Permissions#service_principal_name}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControl.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#user_name Permissions#user_name}. |

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControl.property.groupName"></a>

```go
GroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#group_name Permissions#group_name}.

---

##### `PermissionLevel`<sup>Optional</sup> <a name="PermissionLevel" id="@cdktn/provider-databricks.permissions.PermissionsAccessControl.property.permissionLevel"></a>

```go
PermissionLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#permission_level Permissions#permission_level}.

---

##### `ServicePrincipalName`<sup>Optional</sup> <a name="ServicePrincipalName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControl.property.servicePrincipalName"></a>

```go
ServicePrincipalName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#service_principal_name Permissions#service_principal_name}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControl.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#user_name Permissions#user_name}.

---

### PermissionsConfig <a name="PermissionsConfig" id="@cdktn/provider-databricks.permissions.PermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.permissions.PermissionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/permissions"

&permissions.PermissionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccessControl: interface{},
	AlertV2Id: *string,
	AppName: *string,
	Authorization: *string,
	ClusterId: *string,
	ClusterPolicyId: *string,
	DashboardId: *string,
	DatabaseInstanceName: *string,
	DatabaseProjectName: *string,
	DirectoryId: *string,
	DirectoryPath: *string,
	ExperimentId: *string,
	Id: *string,
	InstancePoolId: *string,
	JobId: *string,
	KnowledgeAssistantId: *string,
	NotebookId: *string,
	NotebookPath: *string,
	ObjectType: *string,
	PipelineId: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.permissions.PermissionsProviderConfig,
	RegisteredModelId: *string,
	RepoId: *string,
	RepoPath: *string,
	ServingEndpointId: *string,
	SqlAlertId: *string,
	SqlDashboardId: *string,
	SqlEndpointId: *string,
	SqlQueryId: *string,
	SupervisorAgentId: *string,
	VectorSearchEndpointId: *string,
	WorkspaceFileId: *string,
	WorkspaceFilePath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.accessControl">AccessControl</a></code> | <code>interface{}</code> | access_control block. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.alertV2Id">AlertV2Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#alert_v2_id Permissions#alert_v2_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.appName">AppName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#app_name Permissions#app_name}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#authorization Permissions#authorization}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#cluster_id Permissions#cluster_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.clusterPolicyId">ClusterPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#cluster_policy_id Permissions#cluster_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.dashboardId">DashboardId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#dashboard_id Permissions#dashboard_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#database_instance_name Permissions#database_instance_name}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.databaseProjectName">DatabaseProjectName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#database_project_name Permissions#database_project_name}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.directoryId">DirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#directory_id Permissions#directory_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.directoryPath">DirectoryPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#directory_path Permissions#directory_path}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.experimentId">ExperimentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#experiment_id Permissions#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#id Permissions#id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.instancePoolId">InstancePoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#instance_pool_id Permissions#instance_pool_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.jobId">JobId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#job_id Permissions#job_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.knowledgeAssistantId">KnowledgeAssistantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#knowledge_assistant_id Permissions#knowledge_assistant_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.notebookId">NotebookId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#notebook_id Permissions#notebook_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.notebookPath">NotebookPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#notebook_path Permissions#notebook_path}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.objectType">ObjectType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#object_type Permissions#object_type}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.pipelineId">PipelineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#pipeline_id Permissions#pipeline_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfig">PermissionsProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.registeredModelId">RegisteredModelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#registered_model_id Permissions#registered_model_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.repoId">RepoId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#repo_id Permissions#repo_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.repoPath">RepoPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#repo_path Permissions#repo_path}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.servingEndpointId">ServingEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#serving_endpoint_id Permissions#serving_endpoint_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.sqlAlertId">SqlAlertId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#sql_alert_id Permissions#sql_alert_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.sqlDashboardId">SqlDashboardId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#sql_dashboard_id Permissions#sql_dashboard_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.sqlEndpointId">SqlEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#sql_endpoint_id Permissions#sql_endpoint_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.sqlQueryId">SqlQueryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#sql_query_id Permissions#sql_query_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.supervisorAgentId">SupervisorAgentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#supervisor_agent_id Permissions#supervisor_agent_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.vectorSearchEndpointId">VectorSearchEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#vector_search_endpoint_id Permissions#vector_search_endpoint_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.workspaceFileId">WorkspaceFileId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#workspace_file_id Permissions#workspace_file_id}. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsConfig.property.workspaceFilePath">WorkspaceFilePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#workspace_file_path Permissions#workspace_file_path}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessControl`<sup>Required</sup> <a name="AccessControl" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.accessControl"></a>

```go
AccessControl interface{}
```

- *Type:* interface{}

access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#access_control Permissions#access_control}

---

##### `AlertV2Id`<sup>Optional</sup> <a name="AlertV2Id" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.alertV2Id"></a>

```go
AlertV2Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#alert_v2_id Permissions#alert_v2_id}.

---

##### `AppName`<sup>Optional</sup> <a name="AppName" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.appName"></a>

```go
AppName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#app_name Permissions#app_name}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#authorization Permissions#authorization}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#cluster_id Permissions#cluster_id}.

---

##### `ClusterPolicyId`<sup>Optional</sup> <a name="ClusterPolicyId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.clusterPolicyId"></a>

```go
ClusterPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#cluster_policy_id Permissions#cluster_policy_id}.

---

##### `DashboardId`<sup>Optional</sup> <a name="DashboardId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.dashboardId"></a>

```go
DashboardId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#dashboard_id Permissions#dashboard_id}.

---

##### `DatabaseInstanceName`<sup>Optional</sup> <a name="DatabaseInstanceName" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.databaseInstanceName"></a>

```go
DatabaseInstanceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#database_instance_name Permissions#database_instance_name}.

---

##### `DatabaseProjectName`<sup>Optional</sup> <a name="DatabaseProjectName" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.databaseProjectName"></a>

```go
DatabaseProjectName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#database_project_name Permissions#database_project_name}.

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.directoryId"></a>

```go
DirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#directory_id Permissions#directory_id}.

---

##### `DirectoryPath`<sup>Optional</sup> <a name="DirectoryPath" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.directoryPath"></a>

```go
DirectoryPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#directory_path Permissions#directory_path}.

---

##### `ExperimentId`<sup>Optional</sup> <a name="ExperimentId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.experimentId"></a>

```go
ExperimentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#experiment_id Permissions#experiment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#id Permissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstancePoolId`<sup>Optional</sup> <a name="InstancePoolId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.instancePoolId"></a>

```go
InstancePoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#instance_pool_id Permissions#instance_pool_id}.

---

##### `JobId`<sup>Optional</sup> <a name="JobId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.jobId"></a>

```go
JobId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#job_id Permissions#job_id}.

---

##### `KnowledgeAssistantId`<sup>Optional</sup> <a name="KnowledgeAssistantId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.knowledgeAssistantId"></a>

```go
KnowledgeAssistantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#knowledge_assistant_id Permissions#knowledge_assistant_id}.

---

##### `NotebookId`<sup>Optional</sup> <a name="NotebookId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.notebookId"></a>

```go
NotebookId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#notebook_id Permissions#notebook_id}.

---

##### `NotebookPath`<sup>Optional</sup> <a name="NotebookPath" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.notebookPath"></a>

```go
NotebookPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#notebook_path Permissions#notebook_path}.

---

##### `ObjectType`<sup>Optional</sup> <a name="ObjectType" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.objectType"></a>

```go
ObjectType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#object_type Permissions#object_type}.

---

##### `PipelineId`<sup>Optional</sup> <a name="PipelineId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.pipelineId"></a>

```go
PipelineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#pipeline_id Permissions#pipeline_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.providerConfig"></a>

```go
ProviderConfig PermissionsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfig">PermissionsProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#provider_config Permissions#provider_config}

---

##### `RegisteredModelId`<sup>Optional</sup> <a name="RegisteredModelId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.registeredModelId"></a>

```go
RegisteredModelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#registered_model_id Permissions#registered_model_id}.

---

##### `RepoId`<sup>Optional</sup> <a name="RepoId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.repoId"></a>

```go
RepoId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#repo_id Permissions#repo_id}.

---

##### `RepoPath`<sup>Optional</sup> <a name="RepoPath" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.repoPath"></a>

```go
RepoPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#repo_path Permissions#repo_path}.

---

##### `ServingEndpointId`<sup>Optional</sup> <a name="ServingEndpointId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.servingEndpointId"></a>

```go
ServingEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#serving_endpoint_id Permissions#serving_endpoint_id}.

---

##### `SqlAlertId`<sup>Optional</sup> <a name="SqlAlertId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.sqlAlertId"></a>

```go
SqlAlertId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#sql_alert_id Permissions#sql_alert_id}.

---

##### `SqlDashboardId`<sup>Optional</sup> <a name="SqlDashboardId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.sqlDashboardId"></a>

```go
SqlDashboardId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#sql_dashboard_id Permissions#sql_dashboard_id}.

---

##### `SqlEndpointId`<sup>Optional</sup> <a name="SqlEndpointId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.sqlEndpointId"></a>

```go
SqlEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#sql_endpoint_id Permissions#sql_endpoint_id}.

---

##### `SqlQueryId`<sup>Optional</sup> <a name="SqlQueryId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.sqlQueryId"></a>

```go
SqlQueryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#sql_query_id Permissions#sql_query_id}.

---

##### `SupervisorAgentId`<sup>Optional</sup> <a name="SupervisorAgentId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.supervisorAgentId"></a>

```go
SupervisorAgentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#supervisor_agent_id Permissions#supervisor_agent_id}.

---

##### `VectorSearchEndpointId`<sup>Optional</sup> <a name="VectorSearchEndpointId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.vectorSearchEndpointId"></a>

```go
VectorSearchEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#vector_search_endpoint_id Permissions#vector_search_endpoint_id}.

---

##### `WorkspaceFileId`<sup>Optional</sup> <a name="WorkspaceFileId" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.workspaceFileId"></a>

```go
WorkspaceFileId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#workspace_file_id Permissions#workspace_file_id}.

---

##### `WorkspaceFilePath`<sup>Optional</sup> <a name="WorkspaceFilePath" id="@cdktn/provider-databricks.permissions.PermissionsConfig.property.workspaceFilePath"></a>

```go
WorkspaceFilePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#workspace_file_path Permissions#workspace_file_path}.

---

### PermissionsProviderConfig <a name="PermissionsProviderConfig" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/permissions"

&permissions.PermissionsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#workspace_id Permissions#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/permissions#workspace_id Permissions#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### PermissionsAccessControlList <a name="PermissionsAccessControlList" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/permissions"

permissions.NewPermissionsAccessControlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PermissionsAccessControlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.get"></a>

```go
func Get(index *f64) PermissionsAccessControlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PermissionsAccessControlOutputReference <a name="PermissionsAccessControlOutputReference" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/permissions"

permissions.NewPermissionsAccessControlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PermissionsAccessControlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetGroupName"></a>

```go
func ResetGroupName()
```

##### `ResetPermissionLevel` <a name="ResetPermissionLevel" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetPermissionLevel"></a>

```go
func ResetPermissionLevel()
```

##### `ResetServicePrincipalName` <a name="ResetServicePrincipalName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetServicePrincipalName"></a>

```go
func ResetServicePrincipalName()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.resetUserName"></a>

```go
func ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevelInput">PermissionLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalNameInput">ServicePrincipalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevel">PermissionLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupNameInput"></a>

```go
func GroupNameInput() *string
```

- *Type:* *string

---

##### `PermissionLevelInput`<sup>Optional</sup> <a name="PermissionLevelInput" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevelInput"></a>

```go
func PermissionLevelInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalNameInput`<sup>Optional</sup> <a name="ServicePrincipalNameInput" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalNameInput"></a>

```go
func ServicePrincipalNameInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `PermissionLevel`<sup>Required</sup> <a name="PermissionLevel" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.permissionLevel"></a>

```go
func PermissionLevel() *string
```

- *Type:* *string

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.servicePrincipalName"></a>

```go
func ServicePrincipalName() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.permissions.PermissionsAccessControlOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PermissionsProviderConfigOutputReference <a name="PermissionsProviderConfigOutputReference" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/permissions"

permissions.NewPermissionsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PermissionsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfig">PermissionsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.permissions.PermissionsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() PermissionsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.permissions.PermissionsProviderConfig">PermissionsProviderConfig</a>

---



