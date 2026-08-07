# `app` Submodule <a name="`app` Submodule" id="@cdktn/provider-databricks.app"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### App <a name="App" id="@cdktn/provider-databricks.app.App"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app databricks_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.App.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new App(Construct Scope, string Id, AppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.App.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.app.App.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.app.App.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppConfig">AppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.app.App.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.app.App.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.app.App.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppConfig">AppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.App.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.app.App.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.app.App.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.app.App.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.app.App.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.app.App.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.app.App.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.app.App.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.app.App.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.app.App.putGitRepository">PutGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.putTelemetryExportDestinations">PutTelemetryExportDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetBudgetPolicyId">ResetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetComputeMaxInstances">ResetComputeMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetComputeMinInstances">ResetComputeMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetComputeSize">ResetComputeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetGitRepository">ResetGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetNoCompute">ResetNoCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetSpace">ResetSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetTelemetryExportDestinations">ResetTelemetryExportDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetUsagePolicyId">ResetUsagePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetUserApiScopes">ResetUserApiScopes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.App.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.app.App.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.app.App.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.app.App.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.app.App.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.App.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.app.App.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.app.App.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.app.App.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.app.App.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.app.App.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.app.App.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.app.App.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.app.App.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.App.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.App.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.App.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.App.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.App.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.App.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.App.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.App.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.App.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.App.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.App.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.App.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.App.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.App.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.App.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.App.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.App.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.App.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.app.App.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.app.App.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.app.App.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.app.App.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.App.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.App.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.app.App.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.app.App.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.app.App.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.app.App.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.app.App.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.app.App.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.app.App.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGitRepository` <a name="PutGitRepository" id="@cdktn/provider-databricks.app.App.putGitRepository"></a>

```csharp
private void PutGitRepository(AppGitRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.App.putGitRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppGitRepository">AppGitRepository</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.app.App.putProviderConfig"></a>

```csharp
private void PutProviderConfig(AppProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.App.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppProviderConfig">AppProviderConfig</a>

---

##### `PutResources` <a name="PutResources" id="@cdktn/provider-databricks.app.App.putResources"></a>

```csharp
private void PutResources(IResolvable|AppResources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.App.putResources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a>[]

---

##### `PutTelemetryExportDestinations` <a name="PutTelemetryExportDestinations" id="@cdktn/provider-databricks.app.App.putTelemetryExportDestinations"></a>

```csharp
private void PutTelemetryExportDestinations(IResolvable|AppTelemetryExportDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.App.putTelemetryExportDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a>[]

---

##### `ResetBudgetPolicyId` <a name="ResetBudgetPolicyId" id="@cdktn/provider-databricks.app.App.resetBudgetPolicyId"></a>

```csharp
private void ResetBudgetPolicyId()
```

##### `ResetComputeMaxInstances` <a name="ResetComputeMaxInstances" id="@cdktn/provider-databricks.app.App.resetComputeMaxInstances"></a>

```csharp
private void ResetComputeMaxInstances()
```

##### `ResetComputeMinInstances` <a name="ResetComputeMinInstances" id="@cdktn/provider-databricks.app.App.resetComputeMinInstances"></a>

```csharp
private void ResetComputeMinInstances()
```

##### `ResetComputeSize` <a name="ResetComputeSize" id="@cdktn/provider-databricks.app.App.resetComputeSize"></a>

```csharp
private void ResetComputeSize()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.app.App.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGitRepository` <a name="ResetGitRepository" id="@cdktn/provider-databricks.app.App.resetGitRepository"></a>

```csharp
private void ResetGitRepository()
```

##### `ResetNoCompute` <a name="ResetNoCompute" id="@cdktn/provider-databricks.app.App.resetNoCompute"></a>

```csharp
private void ResetNoCompute()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.app.App.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-databricks.app.App.resetResources"></a>

```csharp
private void ResetResources()
```

##### `ResetSpace` <a name="ResetSpace" id="@cdktn/provider-databricks.app.App.resetSpace"></a>

```csharp
private void ResetSpace()
```

##### `ResetTelemetryExportDestinations` <a name="ResetTelemetryExportDestinations" id="@cdktn/provider-databricks.app.App.resetTelemetryExportDestinations"></a>

```csharp
private void ResetTelemetryExportDestinations()
```

##### `ResetUsagePolicyId` <a name="ResetUsagePolicyId" id="@cdktn/provider-databricks.app.App.resetUsagePolicyId"></a>

```csharp
private void ResetUsagePolicyId()
```

##### `ResetUserApiScopes` <a name="ResetUserApiScopes" id="@cdktn/provider-databricks.app.App.resetUserApiScopes"></a>

```csharp
private void ResetUserApiScopes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.App.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.app.App.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a App resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.app.App.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

App.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.app.App.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.app.App.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

App.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.app.App.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.app.App.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

App.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.app.App.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.app.App.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

App.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a App resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.app.App.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.app.App.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the App to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.app.App.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing App that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.app.App.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the App to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.App.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.app.App.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.activeDeployment">ActiveDeployment</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference">AppActiveDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.appStatus">AppStatus</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference">AppAppStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.computeStatus">ComputeStatus</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference">AppComputeStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.defaultSourceCodePath">DefaultSourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.effectiveBudgetPolicyId">EffectiveBudgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.effectiveUsagePolicyId">EffectiveUsagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.effectiveUserApiScopes">EffectiveUserApiScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.gitRepository">GitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference">AppGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.oauth2AppClientId">Oauth2AppClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.oauth2AppIntegrationId">Oauth2AppIntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.pendingDeployment">PendingDeployment</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference">AppPendingDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference">AppProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesList">AppResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.servicePrincipalClientId">ServicePrincipalClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.telemetryExportDestinations">TelemetryExportDestinations</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList">AppTelemetryExportDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.thumbnailUrl">ThumbnailUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.updater">Updater</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.budgetPolicyIdInput">BudgetPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.computeMaxInstancesInput">ComputeMaxInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.computeMinInstancesInput">ComputeMinInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.computeSizeInput">ComputeSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.gitRepositoryInput">GitRepositoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppGitRepository">AppGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.noComputeInput">NoComputeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppProviderConfig">AppProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.resourcesInput">ResourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.spaceInput">SpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.telemetryExportDestinationsInput">TelemetryExportDestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.usagePolicyIdInput">UsagePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.userApiScopesInput">UserApiScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.computeMaxInstances">ComputeMaxInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.computeMinInstances">ComputeMinInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.computeSize">ComputeSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.noCompute">NoCompute</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.space">Space</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.usagePolicyId">UsagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.userApiScopes">UserApiScopes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.app.App.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.app.App.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.App.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.app.App.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.app.App.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.app.App.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.app.App.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.app.App.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.app.App.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.app.App.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.app.App.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.app.App.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.app.App.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.app.App.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActiveDeployment`<sup>Required</sup> <a name="ActiveDeployment" id="@cdktn/provider-databricks.app.App.property.activeDeployment"></a>

```csharp
public AppActiveDeploymentOutputReference ActiveDeployment { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference">AppActiveDeploymentOutputReference</a>

---

##### `AppStatus`<sup>Required</sup> <a name="AppStatus" id="@cdktn/provider-databricks.app.App.property.appStatus"></a>

```csharp
public AppAppStatusOutputReference AppStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference">AppAppStatusOutputReference</a>

---

##### `ComputeStatus`<sup>Required</sup> <a name="ComputeStatus" id="@cdktn/provider-databricks.app.App.property.computeStatus"></a>

```csharp
public AppComputeStatusOutputReference ComputeStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference">AppComputeStatusOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.app.App.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.app.App.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `DefaultSourceCodePath`<sup>Required</sup> <a name="DefaultSourceCodePath" id="@cdktn/provider-databricks.app.App.property.defaultSourceCodePath"></a>

```csharp
public string DefaultSourceCodePath { get; }
```

- *Type:* string

---

##### `EffectiveBudgetPolicyId`<sup>Required</sup> <a name="EffectiveBudgetPolicyId" id="@cdktn/provider-databricks.app.App.property.effectiveBudgetPolicyId"></a>

```csharp
public string EffectiveBudgetPolicyId { get; }
```

- *Type:* string

---

##### `EffectiveUsagePolicyId`<sup>Required</sup> <a name="EffectiveUsagePolicyId" id="@cdktn/provider-databricks.app.App.property.effectiveUsagePolicyId"></a>

```csharp
public string EffectiveUsagePolicyId { get; }
```

- *Type:* string

---

##### `EffectiveUserApiScopes`<sup>Required</sup> <a name="EffectiveUserApiScopes" id="@cdktn/provider-databricks.app.App.property.effectiveUserApiScopes"></a>

```csharp
public string[] EffectiveUserApiScopes { get; }
```

- *Type:* string[]

---

##### `GitRepository`<sup>Required</sup> <a name="GitRepository" id="@cdktn/provider-databricks.app.App.property.gitRepository"></a>

```csharp
public AppGitRepositoryOutputReference GitRepository { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference">AppGitRepositoryOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.app.App.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Oauth2AppClientId`<sup>Required</sup> <a name="Oauth2AppClientId" id="@cdktn/provider-databricks.app.App.property.oauth2AppClientId"></a>

```csharp
public string Oauth2AppClientId { get; }
```

- *Type:* string

---

##### `Oauth2AppIntegrationId`<sup>Required</sup> <a name="Oauth2AppIntegrationId" id="@cdktn/provider-databricks.app.App.property.oauth2AppIntegrationId"></a>

```csharp
public string Oauth2AppIntegrationId { get; }
```

- *Type:* string

---

##### `PendingDeployment`<sup>Required</sup> <a name="PendingDeployment" id="@cdktn/provider-databricks.app.App.property.pendingDeployment"></a>

```csharp
public AppPendingDeploymentOutputReference PendingDeployment { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference">AppPendingDeploymentOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.app.App.property.providerConfig"></a>

```csharp
public AppProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference">AppProviderConfigOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-databricks.app.App.property.resources"></a>

```csharp
public AppResourcesList Resources { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesList">AppResourcesList</a>

---

##### `ServicePrincipalClientId`<sup>Required</sup> <a name="ServicePrincipalClientId" id="@cdktn/provider-databricks.app.App.property.servicePrincipalClientId"></a>

```csharp
public string ServicePrincipalClientId { get; }
```

- *Type:* string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-databricks.app.App.property.servicePrincipalId"></a>

```csharp
public double ServicePrincipalId { get; }
```

- *Type:* double

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktn/provider-databricks.app.App.property.servicePrincipalName"></a>

```csharp
public string ServicePrincipalName { get; }
```

- *Type:* string

---

##### `TelemetryExportDestinations`<sup>Required</sup> <a name="TelemetryExportDestinations" id="@cdktn/provider-databricks.app.App.property.telemetryExportDestinations"></a>

```csharp
public AppTelemetryExportDestinationsList TelemetryExportDestinations { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList">AppTelemetryExportDestinationsList</a>

---

##### `ThumbnailUrl`<sup>Required</sup> <a name="ThumbnailUrl" id="@cdktn/provider-databricks.app.App.property.thumbnailUrl"></a>

```csharp
public string ThumbnailUrl { get; }
```

- *Type:* string

---

##### `Updater`<sup>Required</sup> <a name="Updater" id="@cdktn/provider-databricks.app.App.property.updater"></a>

```csharp
public string Updater { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.app.App.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.app.App.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `BudgetPolicyIdInput`<sup>Optional</sup> <a name="BudgetPolicyIdInput" id="@cdktn/provider-databricks.app.App.property.budgetPolicyIdInput"></a>

```csharp
public string BudgetPolicyIdInput { get; }
```

- *Type:* string

---

##### `ComputeMaxInstancesInput`<sup>Optional</sup> <a name="ComputeMaxInstancesInput" id="@cdktn/provider-databricks.app.App.property.computeMaxInstancesInput"></a>

```csharp
public double ComputeMaxInstancesInput { get; }
```

- *Type:* double

---

##### `ComputeMinInstancesInput`<sup>Optional</sup> <a name="ComputeMinInstancesInput" id="@cdktn/provider-databricks.app.App.property.computeMinInstancesInput"></a>

```csharp
public double ComputeMinInstancesInput { get; }
```

- *Type:* double

---

##### `ComputeSizeInput`<sup>Optional</sup> <a name="ComputeSizeInput" id="@cdktn/provider-databricks.app.App.property.computeSizeInput"></a>

```csharp
public string ComputeSizeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.app.App.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GitRepositoryInput`<sup>Optional</sup> <a name="GitRepositoryInput" id="@cdktn/provider-databricks.app.App.property.gitRepositoryInput"></a>

```csharp
public IResolvable|AppGitRepository GitRepositoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppGitRepository">AppGitRepository</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.app.App.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NoComputeInput`<sup>Optional</sup> <a name="NoComputeInput" id="@cdktn/provider-databricks.app.App.property.noComputeInput"></a>

```csharp
public bool|IResolvable NoComputeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.app.App.property.providerConfigInput"></a>

```csharp
public IResolvable|AppProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppProviderConfig">AppProviderConfig</a>

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-databricks.app.App.property.resourcesInput"></a>

```csharp
public IResolvable|AppResources[] ResourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a>[]

---

##### `SpaceInput`<sup>Optional</sup> <a name="SpaceInput" id="@cdktn/provider-databricks.app.App.property.spaceInput"></a>

```csharp
public string SpaceInput { get; }
```

- *Type:* string

---

##### `TelemetryExportDestinationsInput`<sup>Optional</sup> <a name="TelemetryExportDestinationsInput" id="@cdktn/provider-databricks.app.App.property.telemetryExportDestinationsInput"></a>

```csharp
public IResolvable|AppTelemetryExportDestinations[] TelemetryExportDestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a>[]

---

##### `UsagePolicyIdInput`<sup>Optional</sup> <a name="UsagePolicyIdInput" id="@cdktn/provider-databricks.app.App.property.usagePolicyIdInput"></a>

```csharp
public string UsagePolicyIdInput { get; }
```

- *Type:* string

---

##### `UserApiScopesInput`<sup>Optional</sup> <a name="UserApiScopesInput" id="@cdktn/provider-databricks.app.App.property.userApiScopesInput"></a>

```csharp
public string[] UserApiScopesInput { get; }
```

- *Type:* string[]

---

##### `BudgetPolicyId`<sup>Required</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.app.App.property.budgetPolicyId"></a>

```csharp
public string BudgetPolicyId { get; }
```

- *Type:* string

---

##### `ComputeMaxInstances`<sup>Required</sup> <a name="ComputeMaxInstances" id="@cdktn/provider-databricks.app.App.property.computeMaxInstances"></a>

```csharp
public double ComputeMaxInstances { get; }
```

- *Type:* double

---

##### `ComputeMinInstances`<sup>Required</sup> <a name="ComputeMinInstances" id="@cdktn/provider-databricks.app.App.property.computeMinInstances"></a>

```csharp
public double ComputeMinInstances { get; }
```

- *Type:* double

---

##### `ComputeSize`<sup>Required</sup> <a name="ComputeSize" id="@cdktn/provider-databricks.app.App.property.computeSize"></a>

```csharp
public string ComputeSize { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.app.App.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.app.App.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NoCompute`<sup>Required</sup> <a name="NoCompute" id="@cdktn/provider-databricks.app.App.property.noCompute"></a>

```csharp
public bool|IResolvable NoCompute { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktn/provider-databricks.app.App.property.space"></a>

```csharp
public string Space { get; }
```

- *Type:* string

---

##### `UsagePolicyId`<sup>Required</sup> <a name="UsagePolicyId" id="@cdktn/provider-databricks.app.App.property.usagePolicyId"></a>

```csharp
public string UsagePolicyId { get; }
```

- *Type:* string

---

##### `UserApiScopes`<sup>Required</sup> <a name="UserApiScopes" id="@cdktn/provider-databricks.app.App.property.userApiScopes"></a>

```csharp
public string[] UserApiScopes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.App.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.app.App.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppActiveDeployment <a name="AppActiveDeployment" id="@cdktn/provider-databricks.app.AppActiveDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppActiveDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppActiveDeployment {
    string[] Command = null,
    string DeploymentId = null,
    IResolvable|AppActiveDeploymentEnvVars[] EnvVars = null,
    AppActiveDeploymentGitSource GitSource = null,
    string Mode = null,
    string SourceCodePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeployment.property.command">Command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#command App#command}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeployment.property.deploymentId">DeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#deployment_id App#deployment_id}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeployment.property.envVars">EnvVars</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#env_vars App#env_vars}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeployment.property.gitSource">GitSource</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource">AppActiveDeploymentGitSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#git_source App#git_source}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeployment.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#mode App#mode}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeployment.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#source_code_path App#source_code_path}. |

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-databricks.app.AppActiveDeployment.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#command App#command}.

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="@cdktn/provider-databricks.app.AppActiveDeployment.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#deployment_id App#deployment_id}.

---

##### `EnvVars`<sup>Optional</sup> <a name="EnvVars" id="@cdktn/provider-databricks.app.AppActiveDeployment.property.envVars"></a>

```csharp
public IResolvable|AppActiveDeploymentEnvVars[] EnvVars { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#env_vars App#env_vars}.

---

##### `GitSource`<sup>Optional</sup> <a name="GitSource" id="@cdktn/provider-databricks.app.AppActiveDeployment.property.gitSource"></a>

```csharp
public AppActiveDeploymentGitSource GitSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource">AppActiveDeploymentGitSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#git_source App#git_source}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-databricks.app.AppActiveDeployment.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#mode App#mode}.

---

##### `SourceCodePath`<sup>Optional</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeployment.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#source_code_path App#source_code_path}.

---

### AppActiveDeploymentDeploymentArtifacts <a name="AppActiveDeploymentDeploymentArtifacts" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifacts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppActiveDeploymentDeploymentArtifacts {
    string SourceCodePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifacts.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#source_code_path App#source_code_path}. |

---

##### `SourceCodePath`<sup>Optional</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifacts.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#source_code_path App#source_code_path}.

---

### AppActiveDeploymentEnvVars <a name="AppActiveDeploymentEnvVars" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppActiveDeploymentEnvVars {
    string Name = null,
    string Value = null,
    string ValueFrom = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#name App#name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#value App#value}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars.property.valueFrom">ValueFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#value_from App#value_from}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#name App#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#value App#value}.

---

##### `ValueFrom`<sup>Optional</sup> <a name="ValueFrom" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars.property.valueFrom"></a>

```csharp
public string ValueFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#value_from App#value_from}.

---

### AppActiveDeploymentGitSource <a name="AppActiveDeploymentGitSource" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppActiveDeploymentGitSource {
    string Branch = null,
    string Commit = null,
    string SourceCodePath = null,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#branch App#branch}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.property.commit">Commit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#commit App#commit}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#source_code_path App#source_code_path}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.property.tag">Tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#tag App#tag}. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#branch App#branch}.

---

##### `Commit`<sup>Optional</sup> <a name="Commit" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.property.commit"></a>

```csharp
public string Commit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#commit App#commit}.

---

##### `SourceCodePath`<sup>Optional</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#source_code_path App#source_code_path}.

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#tag App#tag}.

---

### AppActiveDeploymentGitSourceGitRepository <a name="AppActiveDeploymentGitSourceGitRepository" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppActiveDeploymentGitSourceGitRepository {
    string Provider,
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepository.property.provider">Provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#provider App#provider}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepository.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#url App#url}. |

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepository.property.provider"></a>

```csharp
public string Provider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#provider App#provider}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepository.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#url App#url}.

---

### AppActiveDeploymentStatus <a name="AppActiveDeploymentStatus" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppActiveDeploymentStatus {

};
```


### AppAppStatus <a name="AppAppStatus" id="@cdktn/provider-databricks.app.AppAppStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppAppStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppAppStatus {

};
```


### AppComputeStatus <a name="AppComputeStatus" id="@cdktn/provider-databricks.app.AppComputeStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppComputeStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppComputeStatus {

};
```


### AppConfig <a name="AppConfig" id="@cdktn/provider-databricks.app.AppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string BudgetPolicyId = null,
    double ComputeMaxInstances = null,
    double ComputeMinInstances = null,
    string ComputeSize = null,
    string Description = null,
    AppGitRepository GitRepository = null,
    bool|IResolvable NoCompute = null,
    AppProviderConfig ProviderConfig = null,
    IResolvable|AppResources[] Resources = null,
    string Space = null,
    IResolvable|AppTelemetryExportDestinations[] TelemetryExportDestinations = null,
    string UsagePolicyId = null,
    string[] UserApiScopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#name App#name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#budget_policy_id App#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.computeMaxInstances">ComputeMaxInstances</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#compute_max_instances App#compute_max_instances}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.computeMinInstances">ComputeMinInstances</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#compute_min_instances App#compute_min_instances}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.computeSize">ComputeSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#compute_size App#compute_size}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#description App#description}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.gitRepository">GitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppGitRepository">AppGitRepository</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#git_repository App#git_repository}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.noCompute">NoCompute</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#no_compute App#no_compute}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppProviderConfig">AppProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#provider_config App#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.resources">Resources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#resources App#resources}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.space">Space</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#space App#space}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.telemetryExportDestinations">TelemetryExportDestinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#telemetry_export_destinations App#telemetry_export_destinations}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.usagePolicyId">UsagePolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#usage_policy_id App#usage_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.userApiScopes">UserApiScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#user_api_scopes App#user_api_scopes}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.app.AppConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.app.AppConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.app.AppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.app.AppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.app.AppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.app.AppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.app.AppConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.app.AppConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#name App#name}.

---

##### `BudgetPolicyId`<sup>Optional</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.app.AppConfig.property.budgetPolicyId"></a>

```csharp
public string BudgetPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#budget_policy_id App#budget_policy_id}.

---

##### `ComputeMaxInstances`<sup>Optional</sup> <a name="ComputeMaxInstances" id="@cdktn/provider-databricks.app.AppConfig.property.computeMaxInstances"></a>

```csharp
public double ComputeMaxInstances { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#compute_max_instances App#compute_max_instances}.

---

##### `ComputeMinInstances`<sup>Optional</sup> <a name="ComputeMinInstances" id="@cdktn/provider-databricks.app.AppConfig.property.computeMinInstances"></a>

```csharp
public double ComputeMinInstances { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#compute_min_instances App#compute_min_instances}.

---

##### `ComputeSize`<sup>Optional</sup> <a name="ComputeSize" id="@cdktn/provider-databricks.app.AppConfig.property.computeSize"></a>

```csharp
public string ComputeSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#compute_size App#compute_size}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.app.AppConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#description App#description}.

---

##### `GitRepository`<sup>Optional</sup> <a name="GitRepository" id="@cdktn/provider-databricks.app.AppConfig.property.gitRepository"></a>

```csharp
public AppGitRepository GitRepository { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppGitRepository">AppGitRepository</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#git_repository App#git_repository}.

---

##### `NoCompute`<sup>Optional</sup> <a name="NoCompute" id="@cdktn/provider-databricks.app.AppConfig.property.noCompute"></a>

```csharp
public bool|IResolvable NoCompute { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#no_compute App#no_compute}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.app.AppConfig.property.providerConfig"></a>

```csharp
public AppProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppProviderConfig">AppProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#provider_config App#provider_config}.

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-databricks.app.AppConfig.property.resources"></a>

```csharp
public IResolvable|AppResources[] Resources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#resources App#resources}.

---

##### `Space`<sup>Optional</sup> <a name="Space" id="@cdktn/provider-databricks.app.AppConfig.property.space"></a>

```csharp
public string Space { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#space App#space}.

---

##### `TelemetryExportDestinations`<sup>Optional</sup> <a name="TelemetryExportDestinations" id="@cdktn/provider-databricks.app.AppConfig.property.telemetryExportDestinations"></a>

```csharp
public IResolvable|AppTelemetryExportDestinations[] TelemetryExportDestinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#telemetry_export_destinations App#telemetry_export_destinations}.

---

##### `UsagePolicyId`<sup>Optional</sup> <a name="UsagePolicyId" id="@cdktn/provider-databricks.app.AppConfig.property.usagePolicyId"></a>

```csharp
public string UsagePolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#usage_policy_id App#usage_policy_id}.

---

##### `UserApiScopes`<sup>Optional</sup> <a name="UserApiScopes" id="@cdktn/provider-databricks.app.AppConfig.property.userApiScopes"></a>

```csharp
public string[] UserApiScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#user_api_scopes App#user_api_scopes}.

---

### AppGitRepository <a name="AppGitRepository" id="@cdktn/provider-databricks.app.AppGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppGitRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppGitRepository {
    string Provider,
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepository.property.provider">Provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#provider App#provider}. |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepository.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#url App#url}. |

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-databricks.app.AppGitRepository.property.provider"></a>

```csharp
public string Provider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#provider App#provider}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.app.AppGitRepository.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#url App#url}.

---

### AppPendingDeployment <a name="AppPendingDeployment" id="@cdktn/provider-databricks.app.AppPendingDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppPendingDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppPendingDeployment {
    string[] Command = null,
    string DeploymentId = null,
    IResolvable|AppPendingDeploymentEnvVars[] EnvVars = null,
    AppPendingDeploymentGitSource GitSource = null,
    string Mode = null,
    string SourceCodePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeployment.property.command">Command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#command App#command}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeployment.property.deploymentId">DeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#deployment_id App#deployment_id}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeployment.property.envVars">EnvVars</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#env_vars App#env_vars}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeployment.property.gitSource">GitSource</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource">AppPendingDeploymentGitSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#git_source App#git_source}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeployment.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#mode App#mode}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeployment.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#source_code_path App#source_code_path}. |

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-databricks.app.AppPendingDeployment.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#command App#command}.

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="@cdktn/provider-databricks.app.AppPendingDeployment.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#deployment_id App#deployment_id}.

---

##### `EnvVars`<sup>Optional</sup> <a name="EnvVars" id="@cdktn/provider-databricks.app.AppPendingDeployment.property.envVars"></a>

```csharp
public IResolvable|AppPendingDeploymentEnvVars[] EnvVars { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#env_vars App#env_vars}.

---

##### `GitSource`<sup>Optional</sup> <a name="GitSource" id="@cdktn/provider-databricks.app.AppPendingDeployment.property.gitSource"></a>

```csharp
public AppPendingDeploymentGitSource GitSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource">AppPendingDeploymentGitSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#git_source App#git_source}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-databricks.app.AppPendingDeployment.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#mode App#mode}.

---

##### `SourceCodePath`<sup>Optional</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeployment.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#source_code_path App#source_code_path}.

---

### AppPendingDeploymentDeploymentArtifacts <a name="AppPendingDeploymentDeploymentArtifacts" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifacts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppPendingDeploymentDeploymentArtifacts {
    string SourceCodePath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifacts.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#source_code_path App#source_code_path}. |

---

##### `SourceCodePath`<sup>Optional</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifacts.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#source_code_path App#source_code_path}.

---

### AppPendingDeploymentEnvVars <a name="AppPendingDeploymentEnvVars" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppPendingDeploymentEnvVars {
    string Name = null,
    string Value = null,
    string ValueFrom = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#name App#name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#value App#value}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars.property.valueFrom">ValueFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#value_from App#value_from}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#name App#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#value App#value}.

---

##### `ValueFrom`<sup>Optional</sup> <a name="ValueFrom" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars.property.valueFrom"></a>

```csharp
public string ValueFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#value_from App#value_from}.

---

### AppPendingDeploymentGitSource <a name="AppPendingDeploymentGitSource" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppPendingDeploymentGitSource {
    string Branch = null,
    string Commit = null,
    string SourceCodePath = null,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#branch App#branch}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.property.commit">Commit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#commit App#commit}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#source_code_path App#source_code_path}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.property.tag">Tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#tag App#tag}. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#branch App#branch}.

---

##### `Commit`<sup>Optional</sup> <a name="Commit" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.property.commit"></a>

```csharp
public string Commit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#commit App#commit}.

---

##### `SourceCodePath`<sup>Optional</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#source_code_path App#source_code_path}.

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#tag App#tag}.

---

### AppPendingDeploymentGitSourceGitRepository <a name="AppPendingDeploymentGitSourceGitRepository" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppPendingDeploymentGitSourceGitRepository {
    string Provider,
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepository.property.provider">Provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#provider App#provider}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepository.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#url App#url}. |

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepository.property.provider"></a>

```csharp
public string Provider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#provider App#provider}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepository.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#url App#url}.

---

### AppPendingDeploymentStatus <a name="AppPendingDeploymentStatus" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppPendingDeploymentStatus {

};
```


### AppProviderConfig <a name="AppProviderConfig" id="@cdktn/provider-databricks.app.AppProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#workspace_id App#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.app.AppProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#workspace_id App#workspace_id}.

---

### AppResources <a name="AppResources" id="@cdktn/provider-databricks.app.AppResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResources {
    string Name,
    AppResourcesApp App = null,
    AppResourcesDatabase Database = null,
    string Description = null,
    AppResourcesExperiment Experiment = null,
    AppResourcesGenieSpace GenieSpace = null,
    AppResourcesJob Job = null,
    AppResourcesPostgres Postgres = null,
    AppResourcesSecret Secret = null,
    AppResourcesServingEndpoint ServingEndpoint = null,
    AppResourcesSqlWarehouse SqlWarehouse = null,
    AppResourcesUcSecurable UcSecurable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#name App#name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.app">App</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesApp">AppResourcesApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#app App#app}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.database">Database</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabase">AppResourcesDatabase</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#database App#database}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#description App#description}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.experiment">Experiment</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperiment">AppResourcesExperiment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#experiment App#experiment}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.genieSpace">GenieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace">AppResourcesGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#genie_space App#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.job">Job</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesJob">AppResourcesJob</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#job App#job}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.postgres">Postgres</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgres">AppResourcesPostgres</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#postgres App#postgres}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.secret">Secret</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecret">AppResourcesSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#secret App#secret}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.servingEndpoint">ServingEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint">AppResourcesServingEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#serving_endpoint App#serving_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.sqlWarehouse">SqlWarehouse</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse">AppResourcesSqlWarehouse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#sql_warehouse App#sql_warehouse}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.ucSecurable">UcSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable">AppResourcesUcSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#uc_securable App#uc_securable}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.app.AppResources.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#name App#name}.

---

##### `App`<sup>Optional</sup> <a name="App" id="@cdktn/provider-databricks.app.AppResources.property.app"></a>

```csharp
public AppResourcesApp App { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesApp">AppResourcesApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#app App#app}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-databricks.app.AppResources.property.database"></a>

```csharp
public AppResourcesDatabase Database { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesDatabase">AppResourcesDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#database App#database}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.app.AppResources.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#description App#description}.

---

##### `Experiment`<sup>Optional</sup> <a name="Experiment" id="@cdktn/provider-databricks.app.AppResources.property.experiment"></a>

```csharp
public AppResourcesExperiment Experiment { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesExperiment">AppResourcesExperiment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#experiment App#experiment}.

---

##### `GenieSpace`<sup>Optional</sup> <a name="GenieSpace" id="@cdktn/provider-databricks.app.AppResources.property.genieSpace"></a>

```csharp
public AppResourcesGenieSpace GenieSpace { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace">AppResourcesGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#genie_space App#genie_space}.

---

##### `Job`<sup>Optional</sup> <a name="Job" id="@cdktn/provider-databricks.app.AppResources.property.job"></a>

```csharp
public AppResourcesJob Job { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesJob">AppResourcesJob</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#job App#job}.

---

##### `Postgres`<sup>Optional</sup> <a name="Postgres" id="@cdktn/provider-databricks.app.AppResources.property.postgres"></a>

```csharp
public AppResourcesPostgres Postgres { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesPostgres">AppResourcesPostgres</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#postgres App#postgres}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktn/provider-databricks.app.AppResources.property.secret"></a>

```csharp
public AppResourcesSecret Secret { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesSecret">AppResourcesSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#secret App#secret}.

---

##### `ServingEndpoint`<sup>Optional</sup> <a name="ServingEndpoint" id="@cdktn/provider-databricks.app.AppResources.property.servingEndpoint"></a>

```csharp
public AppResourcesServingEndpoint ServingEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint">AppResourcesServingEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#serving_endpoint App#serving_endpoint}.

---

##### `SqlWarehouse`<sup>Optional</sup> <a name="SqlWarehouse" id="@cdktn/provider-databricks.app.AppResources.property.sqlWarehouse"></a>

```csharp
public AppResourcesSqlWarehouse SqlWarehouse { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse">AppResourcesSqlWarehouse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#sql_warehouse App#sql_warehouse}.

---

##### `UcSecurable`<sup>Optional</sup> <a name="UcSecurable" id="@cdktn/provider-databricks.app.AppResources.property.ucSecurable"></a>

```csharp
public AppResourcesUcSecurable UcSecurable { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable">AppResourcesUcSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#uc_securable App#uc_securable}.

---

### AppResourcesApp <a name="AppResourcesApp" id="@cdktn/provider-databricks.app.AppResourcesApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesApp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesApp {
    string Name = null,
    string Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesApp.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#name App#name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesApp.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.app.AppResourcesApp.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#name App#name}.

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesApp.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}.

---

### AppResourcesDatabase <a name="AppResourcesDatabase" id="@cdktn/provider-databricks.app.AppResourcesDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesDatabase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesDatabase {
    string DatabaseName,
    string InstanceName,
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabase.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#database_name App#database_name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabase.property.instanceName">InstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#instance_name App#instance_name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabase.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-databricks.app.AppResourcesDatabase.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#database_name App#database_name}.

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-databricks.app.AppResourcesDatabase.property.instanceName"></a>

```csharp
public string InstanceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#instance_name App#instance_name}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesDatabase.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}.

---

### AppResourcesExperiment <a name="AppResourcesExperiment" id="@cdktn/provider-databricks.app.AppResourcesExperiment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesExperiment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesExperiment {
    string ExperimentId,
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperiment.property.experimentId">ExperimentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#experiment_id App#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperiment.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}. |

---

##### `ExperimentId`<sup>Required</sup> <a name="ExperimentId" id="@cdktn/provider-databricks.app.AppResourcesExperiment.property.experimentId"></a>

```csharp
public string ExperimentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#experiment_id App#experiment_id}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesExperiment.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}.

---

### AppResourcesGenieSpace <a name="AppResourcesGenieSpace" id="@cdktn/provider-databricks.app.AppResourcesGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesGenieSpace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesGenieSpace {
    string Name,
    string Permission,
    string SpaceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#name App#name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace.property.spaceId">SpaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#space_id App#space_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.app.AppResourcesGenieSpace.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#name App#name}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesGenieSpace.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}.

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-databricks.app.AppResourcesGenieSpace.property.spaceId"></a>

```csharp
public string SpaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#space_id App#space_id}.

---

### AppResourcesJob <a name="AppResourcesJob" id="@cdktn/provider-databricks.app.AppResourcesJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesJob {
    string Id,
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJob.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#id App#id}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJob.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.app.AppResourcesJob.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#id App#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesJob.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}.

---

### AppResourcesPostgres <a name="AppResourcesPostgres" id="@cdktn/provider-databricks.app.AppResourcesPostgres"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesPostgres.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesPostgres {
    string Branch = null,
    string Database = null,
    string Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgres.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#branch App#branch}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgres.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#database App#database}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgres.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktn/provider-databricks.app.AppResourcesPostgres.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#branch App#branch}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-databricks.app.AppResourcesPostgres.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#database App#database}.

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesPostgres.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}.

---

### AppResourcesSecret <a name="AppResourcesSecret" id="@cdktn/provider-databricks.app.AppResourcesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesSecret {
    string Key,
    string Permission,
    string Scope
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecret.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#key App#key}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecret.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecret.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#scope App#scope}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.app.AppResourcesSecret.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#key App#key}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesSecret.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.app.AppResourcesSecret.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#scope App#scope}.

---

### AppResourcesServingEndpoint <a name="AppResourcesServingEndpoint" id="@cdktn/provider-databricks.app.AppResourcesServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesServingEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesServingEndpoint {
    string Name,
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#name App#name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.app.AppResourcesServingEndpoint.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#name App#name}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesServingEndpoint.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}.

---

### AppResourcesSqlWarehouse <a name="AppResourcesSqlWarehouse" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesSqlWarehouse {
    string Id,
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#id App#id}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouse.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#id App#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouse.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}.

---

### AppResourcesUcSecurable <a name="AppResourcesUcSecurable" id="@cdktn/provider-databricks.app.AppResourcesUcSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesUcSecurable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesUcSecurable {
    string Permission,
    string SecurableFullName,
    string SecurableType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable.property.securableFullName">SecurableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#securable_full_name App#securable_full_name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable.property.securableType">SecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#securable_type App#securable_type}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesUcSecurable.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#permission App#permission}.

---

##### `SecurableFullName`<sup>Required</sup> <a name="SecurableFullName" id="@cdktn/provider-databricks.app.AppResourcesUcSecurable.property.securableFullName"></a>

```csharp
public string SecurableFullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#securable_full_name App#securable_full_name}.

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktn/provider-databricks.app.AppResourcesUcSecurable.property.securableType"></a>

```csharp
public string SecurableType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#securable_type App#securable_type}.

---

### AppTelemetryExportDestinations <a name="AppTelemetryExportDestinations" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppTelemetryExportDestinations {
    AppTelemetryExportDestinationsUnityCatalog UnityCatalog = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations.property.unityCatalog">UnityCatalog</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog">AppTelemetryExportDestinationsUnityCatalog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#unity_catalog App#unity_catalog}. |

---

##### `UnityCatalog`<sup>Optional</sup> <a name="UnityCatalog" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinations.property.unityCatalog"></a>

```csharp
public AppTelemetryExportDestinationsUnityCatalog UnityCatalog { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog">AppTelemetryExportDestinationsUnityCatalog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#unity_catalog App#unity_catalog}.

---

### AppTelemetryExportDestinationsUnityCatalog <a name="AppTelemetryExportDestinationsUnityCatalog" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppTelemetryExportDestinationsUnityCatalog {
    string LogsTable,
    string MetricsTable,
    string TracesTable
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog.property.logsTable">LogsTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#logs_table App#logs_table}. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog.property.metricsTable">MetricsTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#metrics_table App#metrics_table}. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog.property.tracesTable">TracesTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#traces_table App#traces_table}. |

---

##### `LogsTable`<sup>Required</sup> <a name="LogsTable" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog.property.logsTable"></a>

```csharp
public string LogsTable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#logs_table App#logs_table}.

---

##### `MetricsTable`<sup>Required</sup> <a name="MetricsTable" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog.property.metricsTable"></a>

```csharp
public string MetricsTable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#metrics_table App#metrics_table}.

---

##### `TracesTable`<sup>Required</sup> <a name="TracesTable" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog.property.tracesTable"></a>

```csharp
public string TracesTable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/app#traces_table App#traces_table}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppActiveDeploymentDeploymentArtifactsOutputReference <a name="AppActiveDeploymentDeploymentArtifactsOutputReference" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppActiveDeploymentDeploymentArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath">ResetSourceCodePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceCodePath` <a name="ResetSourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath"></a>

```csharp
private void ResetSourceCodePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput">SourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifacts">AppActiveDeploymentDeploymentArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceCodePathInput`<sup>Optional</sup> <a name="SourceCodePathInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput"></a>

```csharp
public string SourceCodePathInput { get; }
```

- *Type:* string

---

##### `SourceCodePath`<sup>Required</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.internalValue"></a>

```csharp
public AppActiveDeploymentDeploymentArtifacts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifacts">AppActiveDeploymentDeploymentArtifacts</a>

---


### AppActiveDeploymentEnvVarsList <a name="AppActiveDeploymentEnvVarsList" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppActiveDeploymentEnvVarsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.get"></a>

```csharp
private AppActiveDeploymentEnvVarsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.property.internalValue"></a>

```csharp
public IResolvable|AppActiveDeploymentEnvVars[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a>[]

---


### AppActiveDeploymentEnvVarsOutputReference <a name="AppActiveDeploymentEnvVarsOutputReference" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppActiveDeploymentEnvVarsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resetValueFrom">ResetValueFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValueFrom` <a name="ResetValueFrom" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resetValueFrom"></a>

```csharp
private void ResetValueFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.valueFromInput">ValueFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.valueFrom">ValueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueFromInput`<sup>Optional</sup> <a name="ValueFromInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.valueFromInput"></a>

```csharp
public string ValueFromInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.valueFrom"></a>

```csharp
public string ValueFrom { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppActiveDeploymentEnvVars InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a>

---


### AppActiveDeploymentGitSourceGitRepositoryOutputReference <a name="AppActiveDeploymentGitSourceGitRepositoryOutputReference" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppActiveDeploymentGitSourceGitRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.providerInput">ProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepository">AppActiveDeploymentGitSourceGitRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.providerInput"></a>

```csharp
public string ProviderInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.internalValue"></a>

```csharp
public AppActiveDeploymentGitSourceGitRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepository">AppActiveDeploymentGitSourceGitRepository</a>

---


### AppActiveDeploymentGitSourceOutputReference <a name="AppActiveDeploymentGitSourceOutputReference" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppActiveDeploymentGitSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resetCommit">ResetCommit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resetSourceCodePath">ResetSourceCodePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetCommit` <a name="ResetCommit" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resetCommit"></a>

```csharp
private void ResetCommit()
```

##### `ResetSourceCodePath` <a name="ResetSourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resetSourceCodePath"></a>

```csharp
private void ResetSourceCodePath()
```

##### `ResetTag` <a name="ResetTag" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.gitRepository">GitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference">AppActiveDeploymentGitSourceGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.resolvedCommit">ResolvedCommit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.commitInput">CommitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.sourceCodePathInput">SourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.commit">Commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource">AppActiveDeploymentGitSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GitRepository`<sup>Required</sup> <a name="GitRepository" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.gitRepository"></a>

```csharp
public AppActiveDeploymentGitSourceGitRepositoryOutputReference GitRepository { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference">AppActiveDeploymentGitSourceGitRepositoryOutputReference</a>

---

##### `ResolvedCommit`<sup>Required</sup> <a name="ResolvedCommit" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.resolvedCommit"></a>

```csharp
public string ResolvedCommit { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `CommitInput`<sup>Optional</sup> <a name="CommitInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.commitInput"></a>

```csharp
public string CommitInput { get; }
```

- *Type:* string

---

##### `SourceCodePathInput`<sup>Optional</sup> <a name="SourceCodePathInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.sourceCodePathInput"></a>

```csharp
public string SourceCodePathInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `Commit`<sup>Required</sup> <a name="Commit" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.commit"></a>

```csharp
public string Commit { get; }
```

- *Type:* string

---

##### `SourceCodePath`<sup>Required</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppActiveDeploymentGitSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource">AppActiveDeploymentGitSource</a>

---


### AppActiveDeploymentOutputReference <a name="AppActiveDeploymentOutputReference" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppActiveDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.putEnvVars">PutEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.putGitSource">PutGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetDeploymentId">ResetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetEnvVars">ResetEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetGitSource">ResetGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetSourceCodePath">ResetSourceCodePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvVars` <a name="PutEnvVars" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.putEnvVars"></a>

```csharp
private void PutEnvVars(IResolvable|AppActiveDeploymentEnvVars[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.putEnvVars.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a>[]

---

##### `PutGitSource` <a name="PutGitSource" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.putGitSource"></a>

```csharp
private void PutGitSource(AppActiveDeploymentGitSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.putGitSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource">AppActiveDeploymentGitSource</a>

---

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetDeploymentId"></a>

```csharp
private void ResetDeploymentId()
```

##### `ResetEnvVars` <a name="ResetEnvVars" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetEnvVars"></a>

```csharp
private void ResetEnvVars()
```

##### `ResetGitSource` <a name="ResetGitSource" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetGitSource"></a>

```csharp
private void ResetGitSource()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetSourceCodePath` <a name="ResetSourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetSourceCodePath"></a>

```csharp
private void ResetSourceCodePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.deploymentArtifacts">DeploymentArtifacts</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference">AppActiveDeploymentDeploymentArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.envVars">EnvVars</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList">AppActiveDeploymentEnvVarsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.gitSource">GitSource</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference">AppActiveDeploymentGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference">AppActiveDeploymentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.envVarsInput">EnvVarsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.gitSourceInput">GitSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource">AppActiveDeploymentGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.sourceCodePathInput">SourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeployment">AppActiveDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `DeploymentArtifacts`<sup>Required</sup> <a name="DeploymentArtifacts" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.deploymentArtifacts"></a>

```csharp
public AppActiveDeploymentDeploymentArtifactsOutputReference DeploymentArtifacts { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference">AppActiveDeploymentDeploymentArtifactsOutputReference</a>

---

##### `EnvVars`<sup>Required</sup> <a name="EnvVars" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.envVars"></a>

```csharp
public AppActiveDeploymentEnvVarsList EnvVars { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList">AppActiveDeploymentEnvVarsList</a>

---

##### `GitSource`<sup>Required</sup> <a name="GitSource" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.gitSource"></a>

```csharp
public AppActiveDeploymentGitSourceOutputReference GitSource { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference">AppActiveDeploymentGitSourceOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.status"></a>

```csharp
public AppActiveDeploymentStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference">AppActiveDeploymentStatusOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `EnvVarsInput`<sup>Optional</sup> <a name="EnvVarsInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.envVarsInput"></a>

```csharp
public IResolvable|AppActiveDeploymentEnvVars[] EnvVarsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a>[]

---

##### `GitSourceInput`<sup>Optional</sup> <a name="GitSourceInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.gitSourceInput"></a>

```csharp
public IResolvable|AppActiveDeploymentGitSource GitSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource">AppActiveDeploymentGitSource</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `SourceCodePathInput`<sup>Optional</sup> <a name="SourceCodePathInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.sourceCodePathInput"></a>

```csharp
public string SourceCodePathInput { get; }
```

- *Type:* string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `SourceCodePath`<sup>Required</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.internalValue"></a>

```csharp
public AppActiveDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeployment">AppActiveDeployment</a>

---


### AppActiveDeploymentStatusOutputReference <a name="AppActiveDeploymentStatusOutputReference" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppActiveDeploymentStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatus">AppActiveDeploymentStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.internalValue"></a>

```csharp
public AppActiveDeploymentStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatus">AppActiveDeploymentStatus</a>

---


### AppAppStatusOutputReference <a name="AppAppStatusOutputReference" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppAppStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.runningInstances">RunningInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppAppStatus">AppAppStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `RunningInstances`<sup>Required</sup> <a name="RunningInstances" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.runningInstances"></a>

```csharp
public double RunningInstances { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.internalValue"></a>

```csharp
public AppAppStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppAppStatus">AppAppStatus</a>

---


### AppComputeStatusOutputReference <a name="AppComputeStatusOutputReference" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppComputeStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.activeInstances">ActiveInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppComputeStatus">AppComputeStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveInstances`<sup>Required</sup> <a name="ActiveInstances" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.activeInstances"></a>

```csharp
public double ActiveInstances { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.internalValue"></a>

```csharp
public AppComputeStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppComputeStatus">AppComputeStatus</a>

---


### AppGitRepositoryOutputReference <a name="AppGitRepositoryOutputReference" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppGitRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.providerInput">ProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppGitRepository">AppGitRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.providerInput"></a>

```csharp
public string ProviderInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppGitRepository InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppGitRepository">AppGitRepository</a>

---


### AppPendingDeploymentDeploymentArtifactsOutputReference <a name="AppPendingDeploymentDeploymentArtifactsOutputReference" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppPendingDeploymentDeploymentArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath">ResetSourceCodePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceCodePath` <a name="ResetSourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath"></a>

```csharp
private void ResetSourceCodePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput">SourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifacts">AppPendingDeploymentDeploymentArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceCodePathInput`<sup>Optional</sup> <a name="SourceCodePathInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput"></a>

```csharp
public string SourceCodePathInput { get; }
```

- *Type:* string

---

##### `SourceCodePath`<sup>Required</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.internalValue"></a>

```csharp
public AppPendingDeploymentDeploymentArtifacts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifacts">AppPendingDeploymentDeploymentArtifacts</a>

---


### AppPendingDeploymentEnvVarsList <a name="AppPendingDeploymentEnvVarsList" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppPendingDeploymentEnvVarsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.get"></a>

```csharp
private AppPendingDeploymentEnvVarsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.property.internalValue"></a>

```csharp
public IResolvable|AppPendingDeploymentEnvVars[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a>[]

---


### AppPendingDeploymentEnvVarsOutputReference <a name="AppPendingDeploymentEnvVarsOutputReference" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppPendingDeploymentEnvVarsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resetValueFrom">ResetValueFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValueFrom` <a name="ResetValueFrom" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resetValueFrom"></a>

```csharp
private void ResetValueFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.valueFromInput">ValueFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.valueFrom">ValueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueFromInput`<sup>Optional</sup> <a name="ValueFromInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.valueFromInput"></a>

```csharp
public string ValueFromInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.valueFrom"></a>

```csharp
public string ValueFrom { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppPendingDeploymentEnvVars InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a>

---


### AppPendingDeploymentGitSourceGitRepositoryOutputReference <a name="AppPendingDeploymentGitSourceGitRepositoryOutputReference" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppPendingDeploymentGitSourceGitRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.providerInput">ProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepository">AppPendingDeploymentGitSourceGitRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.providerInput"></a>

```csharp
public string ProviderInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.internalValue"></a>

```csharp
public AppPendingDeploymentGitSourceGitRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepository">AppPendingDeploymentGitSourceGitRepository</a>

---


### AppPendingDeploymentGitSourceOutputReference <a name="AppPendingDeploymentGitSourceOutputReference" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppPendingDeploymentGitSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resetCommit">ResetCommit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resetSourceCodePath">ResetSourceCodePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetCommit` <a name="ResetCommit" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resetCommit"></a>

```csharp
private void ResetCommit()
```

##### `ResetSourceCodePath` <a name="ResetSourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resetSourceCodePath"></a>

```csharp
private void ResetSourceCodePath()
```

##### `ResetTag` <a name="ResetTag" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.gitRepository">GitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference">AppPendingDeploymentGitSourceGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.resolvedCommit">ResolvedCommit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.commitInput">CommitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.sourceCodePathInput">SourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.commit">Commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource">AppPendingDeploymentGitSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GitRepository`<sup>Required</sup> <a name="GitRepository" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.gitRepository"></a>

```csharp
public AppPendingDeploymentGitSourceGitRepositoryOutputReference GitRepository { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference">AppPendingDeploymentGitSourceGitRepositoryOutputReference</a>

---

##### `ResolvedCommit`<sup>Required</sup> <a name="ResolvedCommit" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.resolvedCommit"></a>

```csharp
public string ResolvedCommit { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `CommitInput`<sup>Optional</sup> <a name="CommitInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.commitInput"></a>

```csharp
public string CommitInput { get; }
```

- *Type:* string

---

##### `SourceCodePathInput`<sup>Optional</sup> <a name="SourceCodePathInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.sourceCodePathInput"></a>

```csharp
public string SourceCodePathInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `Commit`<sup>Required</sup> <a name="Commit" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.commit"></a>

```csharp
public string Commit { get; }
```

- *Type:* string

---

##### `SourceCodePath`<sup>Required</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppPendingDeploymentGitSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource">AppPendingDeploymentGitSource</a>

---


### AppPendingDeploymentOutputReference <a name="AppPendingDeploymentOutputReference" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppPendingDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.putEnvVars">PutEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.putGitSource">PutGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetDeploymentId">ResetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetEnvVars">ResetEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetGitSource">ResetGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetSourceCodePath">ResetSourceCodePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvVars` <a name="PutEnvVars" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.putEnvVars"></a>

```csharp
private void PutEnvVars(IResolvable|AppPendingDeploymentEnvVars[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.putEnvVars.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a>[]

---

##### `PutGitSource` <a name="PutGitSource" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.putGitSource"></a>

```csharp
private void PutGitSource(AppPendingDeploymentGitSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.putGitSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource">AppPendingDeploymentGitSource</a>

---

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetDeploymentId"></a>

```csharp
private void ResetDeploymentId()
```

##### `ResetEnvVars` <a name="ResetEnvVars" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetEnvVars"></a>

```csharp
private void ResetEnvVars()
```

##### `ResetGitSource` <a name="ResetGitSource" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetGitSource"></a>

```csharp
private void ResetGitSource()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetSourceCodePath` <a name="ResetSourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetSourceCodePath"></a>

```csharp
private void ResetSourceCodePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.deploymentArtifacts">DeploymentArtifacts</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference">AppPendingDeploymentDeploymentArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.envVars">EnvVars</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList">AppPendingDeploymentEnvVarsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.gitSource">GitSource</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference">AppPendingDeploymentGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference">AppPendingDeploymentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.envVarsInput">EnvVarsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.gitSourceInput">GitSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource">AppPendingDeploymentGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.sourceCodePathInput">SourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.sourceCodePath">SourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeployment">AppPendingDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `DeploymentArtifacts`<sup>Required</sup> <a name="DeploymentArtifacts" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.deploymentArtifacts"></a>

```csharp
public AppPendingDeploymentDeploymentArtifactsOutputReference DeploymentArtifacts { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference">AppPendingDeploymentDeploymentArtifactsOutputReference</a>

---

##### `EnvVars`<sup>Required</sup> <a name="EnvVars" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.envVars"></a>

```csharp
public AppPendingDeploymentEnvVarsList EnvVars { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList">AppPendingDeploymentEnvVarsList</a>

---

##### `GitSource`<sup>Required</sup> <a name="GitSource" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.gitSource"></a>

```csharp
public AppPendingDeploymentGitSourceOutputReference GitSource { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference">AppPendingDeploymentGitSourceOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.status"></a>

```csharp
public AppPendingDeploymentStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference">AppPendingDeploymentStatusOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `EnvVarsInput`<sup>Optional</sup> <a name="EnvVarsInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.envVarsInput"></a>

```csharp
public IResolvable|AppPendingDeploymentEnvVars[] EnvVarsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a>[]

---

##### `GitSourceInput`<sup>Optional</sup> <a name="GitSourceInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.gitSourceInput"></a>

```csharp
public IResolvable|AppPendingDeploymentGitSource GitSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource">AppPendingDeploymentGitSource</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `SourceCodePathInput`<sup>Optional</sup> <a name="SourceCodePathInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.sourceCodePathInput"></a>

```csharp
public string SourceCodePathInput { get; }
```

- *Type:* string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `SourceCodePath`<sup>Required</sup> <a name="SourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.sourceCodePath"></a>

```csharp
public string SourceCodePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.internalValue"></a>

```csharp
public AppPendingDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeployment">AppPendingDeployment</a>

---


### AppPendingDeploymentStatusOutputReference <a name="AppPendingDeploymentStatusOutputReference" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppPendingDeploymentStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatus">AppPendingDeploymentStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.internalValue"></a>

```csharp
public AppPendingDeploymentStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatus">AppPendingDeploymentStatus</a>

---


### AppProviderConfigOutputReference <a name="AppProviderConfigOutputReference" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppProviderConfig">AppProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppProviderConfig">AppProviderConfig</a>

---


### AppResourcesAppOutputReference <a name="AppResourcesAppOutputReference" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesAppOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesApp">AppResourcesApp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppResourcesApp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesApp">AppResourcesApp</a>

---


### AppResourcesDatabaseOutputReference <a name="AppResourcesDatabaseOutputReference" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.instanceNameInput">InstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesDatabase">AppResourcesDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.instanceNameInput"></a>

```csharp
public string InstanceNameInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppResourcesDatabase InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesDatabase">AppResourcesDatabase</a>

---


### AppResourcesExperimentOutputReference <a name="AppResourcesExperimentOutputReference" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesExperimentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.experimentIdInput">ExperimentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.experimentId">ExperimentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesExperiment">AppResourcesExperiment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExperimentIdInput`<sup>Optional</sup> <a name="ExperimentIdInput" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.experimentIdInput"></a>

```csharp
public string ExperimentIdInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `ExperimentId`<sup>Required</sup> <a name="ExperimentId" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.experimentId"></a>

```csharp
public string ExperimentId { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppResourcesExperiment InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesExperiment">AppResourcesExperiment</a>

---


### AppResourcesGenieSpaceOutputReference <a name="AppResourcesGenieSpaceOutputReference" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesGenieSpaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.spaceIdInput">SpaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.spaceId">SpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace">AppResourcesGenieSpace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `SpaceIdInput`<sup>Optional</sup> <a name="SpaceIdInput" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.spaceIdInput"></a>

```csharp
public string SpaceIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.spaceId"></a>

```csharp
public string SpaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppResourcesGenieSpace InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace">AppResourcesGenieSpace</a>

---


### AppResourcesJobOutputReference <a name="AppResourcesJobOutputReference" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesJobOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesJob">AppResourcesJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppResourcesJob InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesJob">AppResourcesJob</a>

---


### AppResourcesList <a name="AppResourcesList" id="@cdktn/provider-databricks.app.AppResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.app.AppResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.app.AppResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.app.AppResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.app.AppResourcesList.get"></a>

```csharp
private AppResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.app.AppResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppResourcesList.property.internalValue"></a>

```csharp
public IResolvable|AppResources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a>[]

---


### AppResourcesOutputReference <a name="AppResourcesOutputReference" id="@cdktn/provider-databricks.app.AppResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putApp">PutApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putExperiment">PutExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putGenieSpace">PutGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putJob">PutJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putPostgres">PutPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putServingEndpoint">PutServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putSqlWarehouse">PutSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putUcSecurable">PutUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetApp">ResetApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetExperiment">ResetExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetGenieSpace">ResetGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetJob">ResetJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetPostgres">ResetPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetServingEndpoint">ResetServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetSqlWarehouse">ResetSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetUcSecurable">ResetUcSecurable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApp` <a name="PutApp" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putApp"></a>

```csharp
private void PutApp(AppResourcesApp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putApp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesApp">AppResourcesApp</a>

---

##### `PutDatabase` <a name="PutDatabase" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putDatabase"></a>

```csharp
private void PutDatabase(AppResourcesDatabase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesDatabase">AppResourcesDatabase</a>

---

##### `PutExperiment` <a name="PutExperiment" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putExperiment"></a>

```csharp
private void PutExperiment(AppResourcesExperiment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putExperiment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesExperiment">AppResourcesExperiment</a>

---

##### `PutGenieSpace` <a name="PutGenieSpace" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putGenieSpace"></a>

```csharp
private void PutGenieSpace(AppResourcesGenieSpace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putGenieSpace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace">AppResourcesGenieSpace</a>

---

##### `PutJob` <a name="PutJob" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putJob"></a>

```csharp
private void PutJob(AppResourcesJob Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesJob">AppResourcesJob</a>

---

##### `PutPostgres` <a name="PutPostgres" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putPostgres"></a>

```csharp
private void PutPostgres(AppResourcesPostgres Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putPostgres.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesPostgres">AppResourcesPostgres</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putSecret"></a>

```csharp
private void PutSecret(AppResourcesSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesSecret">AppResourcesSecret</a>

---

##### `PutServingEndpoint` <a name="PutServingEndpoint" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putServingEndpoint"></a>

```csharp
private void PutServingEndpoint(AppResourcesServingEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putServingEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint">AppResourcesServingEndpoint</a>

---

##### `PutSqlWarehouse` <a name="PutSqlWarehouse" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putSqlWarehouse"></a>

```csharp
private void PutSqlWarehouse(AppResourcesSqlWarehouse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putSqlWarehouse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse">AppResourcesSqlWarehouse</a>

---

##### `PutUcSecurable` <a name="PutUcSecurable" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putUcSecurable"></a>

```csharp
private void PutUcSecurable(AppResourcesUcSecurable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putUcSecurable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable">AppResourcesUcSecurable</a>

---

##### `ResetApp` <a name="ResetApp" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetApp"></a>

```csharp
private void ResetApp()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExperiment` <a name="ResetExperiment" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetExperiment"></a>

```csharp
private void ResetExperiment()
```

##### `ResetGenieSpace` <a name="ResetGenieSpace" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetGenieSpace"></a>

```csharp
private void ResetGenieSpace()
```

##### `ResetJob` <a name="ResetJob" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetJob"></a>

```csharp
private void ResetJob()
```

##### `ResetPostgres` <a name="ResetPostgres" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetPostgres"></a>

```csharp
private void ResetPostgres()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetServingEndpoint` <a name="ResetServingEndpoint" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetServingEndpoint"></a>

```csharp
private void ResetServingEndpoint()
```

##### `ResetSqlWarehouse` <a name="ResetSqlWarehouse" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetSqlWarehouse"></a>

```csharp
private void ResetSqlWarehouse()
```

##### `ResetUcSecurable` <a name="ResetUcSecurable" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetUcSecurable"></a>

```csharp
private void ResetUcSecurable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.app">App</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference">AppResourcesAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.database">Database</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference">AppResourcesDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.experiment">Experiment</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference">AppResourcesExperimentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.genieSpace">GenieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference">AppResourcesGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.job">Job</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference">AppResourcesJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.postgres">Postgres</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference">AppResourcesPostgresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference">AppResourcesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.servingEndpoint">ServingEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference">AppResourcesServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.sqlWarehouse">SqlWarehouse</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference">AppResourcesSqlWarehouseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.ucSecurable">UcSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference">AppResourcesUcSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.appInput">AppInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesApp">AppResourcesApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesDatabase">AppResourcesDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.experimentInput">ExperimentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesExperiment">AppResourcesExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.genieSpaceInput">GenieSpaceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace">AppResourcesGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.jobInput">JobInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesJob">AppResourcesJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.postgresInput">PostgresInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesPostgres">AppResourcesPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.secretInput">SecretInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesSecret">AppResourcesSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.servingEndpointInput">ServingEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint">AppResourcesServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.sqlWarehouseInput">SqlWarehouseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse">AppResourcesSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.ucSecurableInput">UcSecurableInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable">AppResourcesUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.app"></a>

```csharp
public AppResourcesAppOutputReference App { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference">AppResourcesAppOutputReference</a>

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.database"></a>

```csharp
public AppResourcesDatabaseOutputReference Database { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference">AppResourcesDatabaseOutputReference</a>

---

##### `Experiment`<sup>Required</sup> <a name="Experiment" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.experiment"></a>

```csharp
public AppResourcesExperimentOutputReference Experiment { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference">AppResourcesExperimentOutputReference</a>

---

##### `GenieSpace`<sup>Required</sup> <a name="GenieSpace" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.genieSpace"></a>

```csharp
public AppResourcesGenieSpaceOutputReference GenieSpace { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference">AppResourcesGenieSpaceOutputReference</a>

---

##### `Job`<sup>Required</sup> <a name="Job" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.job"></a>

```csharp
public AppResourcesJobOutputReference Job { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference">AppResourcesJobOutputReference</a>

---

##### `Postgres`<sup>Required</sup> <a name="Postgres" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.postgres"></a>

```csharp
public AppResourcesPostgresOutputReference Postgres { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference">AppResourcesPostgresOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.secret"></a>

```csharp
public AppResourcesSecretOutputReference Secret { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference">AppResourcesSecretOutputReference</a>

---

##### `ServingEndpoint`<sup>Required</sup> <a name="ServingEndpoint" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.servingEndpoint"></a>

```csharp
public AppResourcesServingEndpointOutputReference ServingEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference">AppResourcesServingEndpointOutputReference</a>

---

##### `SqlWarehouse`<sup>Required</sup> <a name="SqlWarehouse" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.sqlWarehouse"></a>

```csharp
public AppResourcesSqlWarehouseOutputReference SqlWarehouse { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference">AppResourcesSqlWarehouseOutputReference</a>

---

##### `UcSecurable`<sup>Required</sup> <a name="UcSecurable" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.ucSecurable"></a>

```csharp
public AppResourcesUcSecurableOutputReference UcSecurable { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference">AppResourcesUcSecurableOutputReference</a>

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.appInput"></a>

```csharp
public IResolvable|AppResourcesApp AppInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesApp">AppResourcesApp</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.databaseInput"></a>

```csharp
public IResolvable|AppResourcesDatabase DatabaseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesDatabase">AppResourcesDatabase</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExperimentInput`<sup>Optional</sup> <a name="ExperimentInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.experimentInput"></a>

```csharp
public IResolvable|AppResourcesExperiment ExperimentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesExperiment">AppResourcesExperiment</a>

---

##### `GenieSpaceInput`<sup>Optional</sup> <a name="GenieSpaceInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.genieSpaceInput"></a>

```csharp
public IResolvable|AppResourcesGenieSpace GenieSpaceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace">AppResourcesGenieSpace</a>

---

##### `JobInput`<sup>Optional</sup> <a name="JobInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.jobInput"></a>

```csharp
public IResolvable|AppResourcesJob JobInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesJob">AppResourcesJob</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PostgresInput`<sup>Optional</sup> <a name="PostgresInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.postgresInput"></a>

```csharp
public IResolvable|AppResourcesPostgres PostgresInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesPostgres">AppResourcesPostgres</a>

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.secretInput"></a>

```csharp
public IResolvable|AppResourcesSecret SecretInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesSecret">AppResourcesSecret</a>

---

##### `ServingEndpointInput`<sup>Optional</sup> <a name="ServingEndpointInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.servingEndpointInput"></a>

```csharp
public IResolvable|AppResourcesServingEndpoint ServingEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint">AppResourcesServingEndpoint</a>

---

##### `SqlWarehouseInput`<sup>Optional</sup> <a name="SqlWarehouseInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.sqlWarehouseInput"></a>

```csharp
public IResolvable|AppResourcesSqlWarehouse SqlWarehouseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse">AppResourcesSqlWarehouse</a>

---

##### `UcSecurableInput`<sup>Optional</sup> <a name="UcSecurableInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.ucSecurableInput"></a>

```csharp
public IResolvable|AppResourcesUcSecurable UcSecurableInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable">AppResourcesUcSecurable</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppResources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a>

---


### AppResourcesPostgresOutputReference <a name="AppResourcesPostgresOutputReference" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesPostgresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesPostgres">AppResourcesPostgres</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppResourcesPostgres InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesPostgres">AppResourcesPostgres</a>

---


### AppResourcesSecretOutputReference <a name="AppResourcesSecretOutputReference" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesSecret">AppResourcesSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppResourcesSecret InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesSecret">AppResourcesSecret</a>

---


### AppResourcesServingEndpointOutputReference <a name="AppResourcesServingEndpointOutputReference" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesServingEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint">AppResourcesServingEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppResourcesServingEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint">AppResourcesServingEndpoint</a>

---


### AppResourcesSqlWarehouseOutputReference <a name="AppResourcesSqlWarehouseOutputReference" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesSqlWarehouseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse">AppResourcesSqlWarehouse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppResourcesSqlWarehouse InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse">AppResourcesSqlWarehouse</a>

---


### AppResourcesUcSecurableOutputReference <a name="AppResourcesUcSecurableOutputReference" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppResourcesUcSecurableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableKind">SecurableKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableFullNameInput">SecurableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableTypeInput">SecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableFullName">SecurableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableType">SecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable">AppResourcesUcSecurable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurableKind`<sup>Required</sup> <a name="SecurableKind" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableKind"></a>

```csharp
public string SecurableKind { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `SecurableFullNameInput`<sup>Optional</sup> <a name="SecurableFullNameInput" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableFullNameInput"></a>

```csharp
public string SecurableFullNameInput { get; }
```

- *Type:* string

---

##### `SecurableTypeInput`<sup>Optional</sup> <a name="SecurableTypeInput" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableTypeInput"></a>

```csharp
public string SecurableTypeInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `SecurableFullName`<sup>Required</sup> <a name="SecurableFullName" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableFullName"></a>

```csharp
public string SecurableFullName { get; }
```

- *Type:* string

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableType"></a>

```csharp
public string SecurableType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppResourcesUcSecurable InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable">AppResourcesUcSecurable</a>

---


### AppTelemetryExportDestinationsList <a name="AppTelemetryExportDestinationsList" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppTelemetryExportDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.get"></a>

```csharp
private AppTelemetryExportDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|AppTelemetryExportDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a>[]

---


### AppTelemetryExportDestinationsOutputReference <a name="AppTelemetryExportDestinationsOutputReference" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppTelemetryExportDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.putUnityCatalog">PutUnityCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.resetUnityCatalog">ResetUnityCatalog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUnityCatalog` <a name="PutUnityCatalog" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.putUnityCatalog"></a>

```csharp
private void PutUnityCatalog(AppTelemetryExportDestinationsUnityCatalog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.putUnityCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog">AppTelemetryExportDestinationsUnityCatalog</a>

---

##### `ResetUnityCatalog` <a name="ResetUnityCatalog" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.resetUnityCatalog"></a>

```csharp
private void ResetUnityCatalog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.unityCatalog">UnityCatalog</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference">AppTelemetryExportDestinationsUnityCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.unityCatalogInput">UnityCatalogInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog">AppTelemetryExportDestinationsUnityCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnityCatalog`<sup>Required</sup> <a name="UnityCatalog" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.unityCatalog"></a>

```csharp
public AppTelemetryExportDestinationsUnityCatalogOutputReference UnityCatalog { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference">AppTelemetryExportDestinationsUnityCatalogOutputReference</a>

---

##### `UnityCatalogInput`<sup>Optional</sup> <a name="UnityCatalogInput" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.unityCatalogInput"></a>

```csharp
public IResolvable|AppTelemetryExportDestinationsUnityCatalog UnityCatalogInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog">AppTelemetryExportDestinationsUnityCatalog</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppTelemetryExportDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a>

---


### AppTelemetryExportDestinationsUnityCatalogOutputReference <a name="AppTelemetryExportDestinationsUnityCatalogOutputReference" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AppTelemetryExportDestinationsUnityCatalogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTableInput">LogsTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTableInput">MetricsTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTableInput">TracesTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTable">LogsTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTable">MetricsTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTable">TracesTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog">AppTelemetryExportDestinationsUnityCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogsTableInput`<sup>Optional</sup> <a name="LogsTableInput" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTableInput"></a>

```csharp
public string LogsTableInput { get; }
```

- *Type:* string

---

##### `MetricsTableInput`<sup>Optional</sup> <a name="MetricsTableInput" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTableInput"></a>

```csharp
public string MetricsTableInput { get; }
```

- *Type:* string

---

##### `TracesTableInput`<sup>Optional</sup> <a name="TracesTableInput" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTableInput"></a>

```csharp
public string TracesTableInput { get; }
```

- *Type:* string

---

##### `LogsTable`<sup>Required</sup> <a name="LogsTable" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTable"></a>

```csharp
public string LogsTable { get; }
```

- *Type:* string

---

##### `MetricsTable`<sup>Required</sup> <a name="MetricsTable" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTable"></a>

```csharp
public string MetricsTable { get; }
```

- *Type:* string

---

##### `TracesTable`<sup>Required</sup> <a name="TracesTable" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTable"></a>

```csharp
public string TracesTable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppTelemetryExportDestinationsUnityCatalog InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog">AppTelemetryExportDestinationsUnityCatalog</a>

---



