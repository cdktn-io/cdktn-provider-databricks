# `dashboard` Submodule <a name="`dashboard` Submodule" id="@cdktn/provider-databricks.dashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Dashboard <a name="Dashboard" id="@cdktn/provider-databricks.dashboard.Dashboard"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard databricks_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dashboard.Dashboard.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new Dashboard(Construct Scope, string Id, DashboardConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig">DashboardConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dashboard.Dashboard.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dashboard.Dashboard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dashboard.Dashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dashboard.DashboardConfig">DashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetCreateTime">ResetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetDashboardChangeDetected">ResetDashboardChangeDetected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetDashboardId">ResetDashboardId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetDatasetCatalog">ResetDatasetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetDatasetSchema">ResetDatasetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetEmbedCredentials">ResetEmbedCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetFilePath">ResetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetLifecycleState">ResetLifecycleState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetMd5">ResetMd5</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetSerializedDashboard">ResetSerializedDashboard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetUpdateTime">ResetUpdateTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dashboard.Dashboard.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dashboard.Dashboard.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dashboard.Dashboard.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dashboard.Dashboard.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dashboard.Dashboard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dashboard.Dashboard.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dashboard.Dashboard.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dashboard.Dashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dashboard.Dashboard.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dashboard.Dashboard.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dashboard.Dashboard.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dashboard.Dashboard.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.dashboard.Dashboard.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.dashboard.Dashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.dashboard.Dashboard.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.dashboard.Dashboard.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dashboard.Dashboard.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dashboard.Dashboard.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.dashboard.Dashboard.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dashboard.Dashboard.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.dashboard.Dashboard.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.dashboard.Dashboard.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.dashboard.Dashboard.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.dashboard.Dashboard.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dashboard.Dashboard.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dashboard.Dashboard.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DashboardProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dashboard.Dashboard.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfig">DashboardProviderConfig</a>

---

##### `ResetCreateTime` <a name="ResetCreateTime" id="@cdktn/provider-databricks.dashboard.Dashboard.resetCreateTime"></a>

```csharp
private void ResetCreateTime()
```

##### `ResetDashboardChangeDetected` <a name="ResetDashboardChangeDetected" id="@cdktn/provider-databricks.dashboard.Dashboard.resetDashboardChangeDetected"></a>

```csharp
private void ResetDashboardChangeDetected()
```

##### `ResetDashboardId` <a name="ResetDashboardId" id="@cdktn/provider-databricks.dashboard.Dashboard.resetDashboardId"></a>

```csharp
private void ResetDashboardId()
```

##### `ResetDatasetCatalog` <a name="ResetDatasetCatalog" id="@cdktn/provider-databricks.dashboard.Dashboard.resetDatasetCatalog"></a>

```csharp
private void ResetDatasetCatalog()
```

##### `ResetDatasetSchema` <a name="ResetDatasetSchema" id="@cdktn/provider-databricks.dashboard.Dashboard.resetDatasetSchema"></a>

```csharp
private void ResetDatasetSchema()
```

##### `ResetEmbedCredentials` <a name="ResetEmbedCredentials" id="@cdktn/provider-databricks.dashboard.Dashboard.resetEmbedCredentials"></a>

```csharp
private void ResetEmbedCredentials()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-databricks.dashboard.Dashboard.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetFilePath` <a name="ResetFilePath" id="@cdktn/provider-databricks.dashboard.Dashboard.resetFilePath"></a>

```csharp
private void ResetFilePath()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dashboard.Dashboard.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLifecycleState` <a name="ResetLifecycleState" id="@cdktn/provider-databricks.dashboard.Dashboard.resetLifecycleState"></a>

```csharp
private void ResetLifecycleState()
```

##### `ResetMd5` <a name="ResetMd5" id="@cdktn/provider-databricks.dashboard.Dashboard.resetMd5"></a>

```csharp
private void ResetMd5()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-databricks.dashboard.Dashboard.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dashboard.Dashboard.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetSerializedDashboard` <a name="ResetSerializedDashboard" id="@cdktn/provider-databricks.dashboard.Dashboard.resetSerializedDashboard"></a>

```csharp
private void ResetSerializedDashboard()
```

##### `ResetUpdateTime` <a name="ResetUpdateTime" id="@cdktn/provider-databricks.dashboard.Dashboard.resetUpdateTime"></a>

```csharp
private void ResetUpdateTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Dashboard resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dashboard.Dashboard.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

Dashboard.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dashboard.Dashboard.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dashboard.Dashboard.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

Dashboard.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dashboard.Dashboard.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.dashboard.Dashboard.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

Dashboard.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dashboard.Dashboard.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dashboard.Dashboard.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

Dashboard.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Dashboard resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dashboard.Dashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dashboard.Dashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Dashboard to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dashboard.Dashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Dashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dashboard.Dashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Dashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference">DashboardProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.createTimeInput">CreateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.dashboardChangeDetectedInput">DashboardChangeDetectedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.dashboardIdInput">DashboardIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.datasetCatalogInput">DatasetCatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.datasetSchemaInput">DatasetSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.embedCredentialsInput">EmbedCredentialsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.filePathInput">FilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.lifecycleStateInput">LifecycleStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.md5Input">Md5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.parentPathInput">ParentPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfig">DashboardProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.serializedDashboardInput">SerializedDashboardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.updateTimeInput">UpdateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.dashboardChangeDetected">DashboardChangeDetected</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.dashboardId">DashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.datasetCatalog">DatasetCatalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.datasetSchema">DatasetSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.embedCredentials">EmbedCredentials</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.md5">Md5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.parentPath">ParentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.serializedDashboard">SerializedDashboard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.warehouseId">WarehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dashboard.Dashboard.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dashboard.Dashboard.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dashboard.Dashboard.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dashboard.Dashboard.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dashboard.Dashboard.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dashboard.Dashboard.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dashboard.Dashboard.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dashboard.Dashboard.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dashboard.Dashboard.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dashboard.Dashboard.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dashboard.Dashboard.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dashboard.Dashboard.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dashboard.Dashboard.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dashboard.Dashboard.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dashboard.Dashboard.property.providerConfig"></a>

```csharp
public DashboardProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference">DashboardProviderConfigOutputReference</a>

---

##### `CreateTimeInput`<sup>Optional</sup> <a name="CreateTimeInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.createTimeInput"></a>

```csharp
public string CreateTimeInput { get; }
```

- *Type:* string

---

##### `DashboardChangeDetectedInput`<sup>Optional</sup> <a name="DashboardChangeDetectedInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.dashboardChangeDetectedInput"></a>

```csharp
public bool|IResolvable DashboardChangeDetectedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DashboardIdInput`<sup>Optional</sup> <a name="DashboardIdInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.dashboardIdInput"></a>

```csharp
public string DashboardIdInput { get; }
```

- *Type:* string

---

##### `DatasetCatalogInput`<sup>Optional</sup> <a name="DatasetCatalogInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.datasetCatalogInput"></a>

```csharp
public string DatasetCatalogInput { get; }
```

- *Type:* string

---

##### `DatasetSchemaInput`<sup>Optional</sup> <a name="DatasetSchemaInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.datasetSchemaInput"></a>

```csharp
public string DatasetSchemaInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmbedCredentialsInput`<sup>Optional</sup> <a name="EmbedCredentialsInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.embedCredentialsInput"></a>

```csharp
public bool|IResolvable EmbedCredentialsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.filePathInput"></a>

```csharp
public string FilePathInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LifecycleStateInput`<sup>Optional</sup> <a name="LifecycleStateInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.lifecycleStateInput"></a>

```csharp
public string LifecycleStateInput { get; }
```

- *Type:* string

---

##### `Md5Input`<sup>Optional</sup> <a name="Md5Input" id="@cdktn/provider-databricks.dashboard.Dashboard.property.md5Input"></a>

```csharp
public string Md5Input { get; }
```

- *Type:* string

---

##### `ParentPathInput`<sup>Optional</sup> <a name="ParentPathInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.parentPathInput"></a>

```csharp
public string ParentPathInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.providerConfigInput"></a>

```csharp
public DashboardProviderConfig ProviderConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfig">DashboardProviderConfig</a>

---

##### `SerializedDashboardInput`<sup>Optional</sup> <a name="SerializedDashboardInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.serializedDashboardInput"></a>

```csharp
public string SerializedDashboardInput { get; }
```

- *Type:* string

---

##### `UpdateTimeInput`<sup>Optional</sup> <a name="UpdateTimeInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.updateTimeInput"></a>

```csharp
public string UpdateTimeInput { get; }
```

- *Type:* string

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.warehouseIdInput"></a>

```csharp
public string WarehouseIdInput { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dashboard.Dashboard.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DashboardChangeDetected`<sup>Required</sup> <a name="DashboardChangeDetected" id="@cdktn/provider-databricks.dashboard.Dashboard.property.dashboardChangeDetected"></a>

```csharp
public bool|IResolvable DashboardChangeDetected { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktn/provider-databricks.dashboard.Dashboard.property.dashboardId"></a>

```csharp
public string DashboardId { get; }
```

- *Type:* string

---

##### `DatasetCatalog`<sup>Required</sup> <a name="DatasetCatalog" id="@cdktn/provider-databricks.dashboard.Dashboard.property.datasetCatalog"></a>

```csharp
public string DatasetCatalog { get; }
```

- *Type:* string

---

##### `DatasetSchema`<sup>Required</sup> <a name="DatasetSchema" id="@cdktn/provider-databricks.dashboard.Dashboard.property.datasetSchema"></a>

```csharp
public string DatasetSchema { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dashboard.Dashboard.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EmbedCredentials`<sup>Required</sup> <a name="EmbedCredentials" id="@cdktn/provider-databricks.dashboard.Dashboard.property.embedCredentials"></a>

```csharp
public bool|IResolvable EmbedCredentials { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dashboard.Dashboard.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktn/provider-databricks.dashboard.Dashboard.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dashboard.Dashboard.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-databricks.dashboard.Dashboard.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `Md5`<sup>Required</sup> <a name="Md5" id="@cdktn/provider-databricks.dashboard.Dashboard.property.md5"></a>

```csharp
public string Md5 { get; }
```

- *Type:* string

---

##### `ParentPath`<sup>Required</sup> <a name="ParentPath" id="@cdktn/provider-databricks.dashboard.Dashboard.property.parentPath"></a>

```csharp
public string ParentPath { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dashboard.Dashboard.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `SerializedDashboard`<sup>Required</sup> <a name="SerializedDashboard" id="@cdktn/provider-databricks.dashboard.Dashboard.property.serializedDashboard"></a>

```csharp
public string SerializedDashboard { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dashboard.Dashboard.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dashboard.Dashboard.property.warehouseId"></a>

```csharp
public string WarehouseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dashboard.Dashboard.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DashboardConfig <a name="DashboardConfig" id="@cdktn/provider-databricks.dashboard.DashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dashboard.DashboardConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DashboardConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string ParentPath,
    string WarehouseId,
    string CreateTime = null,
    bool|IResolvable DashboardChangeDetected = null,
    string DashboardId = null,
    string DatasetCatalog = null,
    string DatasetSchema = null,
    bool|IResolvable EmbedCredentials = null,
    string Etag = null,
    string FilePath = null,
    string Id = null,
    string LifecycleState = null,
    string Md5 = null,
    string Path = null,
    DashboardProviderConfig ProviderConfig = null,
    string SerializedDashboard = null,
    string UpdateTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#display_name Dashboard#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.parentPath">ParentPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#parent_path Dashboard#parent_path}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.warehouseId">WarehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#warehouse_id Dashboard#warehouse_id}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.createTime">CreateTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#create_time Dashboard#create_time}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.dashboardChangeDetected">DashboardChangeDetected</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#dashboard_change_detected Dashboard#dashboard_change_detected}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.dashboardId">DashboardId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#dashboard_id Dashboard#dashboard_id}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.datasetCatalog">DatasetCatalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#dataset_catalog Dashboard#dataset_catalog}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.datasetSchema">DatasetSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#dataset_schema Dashboard#dataset_schema}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.embedCredentials">EmbedCredentials</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#embed_credentials Dashboard#embed_credentials}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.etag">Etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#etag Dashboard#etag}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.filePath">FilePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#file_path Dashboard#file_path}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#id Dashboard#id}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#lifecycle_state Dashboard#lifecycle_state}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.md5">Md5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#md5 Dashboard#md5}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#path Dashboard#path}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfig">DashboardProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.serializedDashboard">SerializedDashboard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#serialized_dashboard Dashboard#serialized_dashboard}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#update_time Dashboard#update_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#display_name Dashboard#display_name}.

---

##### `ParentPath`<sup>Required</sup> <a name="ParentPath" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.parentPath"></a>

```csharp
public string ParentPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#parent_path Dashboard#parent_path}.

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.warehouseId"></a>

```csharp
public string WarehouseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#warehouse_id Dashboard#warehouse_id}.

---

##### `CreateTime`<sup>Optional</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.createTime"></a>

```csharp
public string CreateTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#create_time Dashboard#create_time}.

---

##### `DashboardChangeDetected`<sup>Optional</sup> <a name="DashboardChangeDetected" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.dashboardChangeDetected"></a>

```csharp
public bool|IResolvable DashboardChangeDetected { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#dashboard_change_detected Dashboard#dashboard_change_detected}.

---

##### `DashboardId`<sup>Optional</sup> <a name="DashboardId" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.dashboardId"></a>

```csharp
public string DashboardId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#dashboard_id Dashboard#dashboard_id}.

---

##### `DatasetCatalog`<sup>Optional</sup> <a name="DatasetCatalog" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.datasetCatalog"></a>

```csharp
public string DatasetCatalog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#dataset_catalog Dashboard#dataset_catalog}.

---

##### `DatasetSchema`<sup>Optional</sup> <a name="DatasetSchema" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.datasetSchema"></a>

```csharp
public string DatasetSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#dataset_schema Dashboard#dataset_schema}.

---

##### `EmbedCredentials`<sup>Optional</sup> <a name="EmbedCredentials" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.embedCredentials"></a>

```csharp
public bool|IResolvable EmbedCredentials { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#embed_credentials Dashboard#embed_credentials}.

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#etag Dashboard#etag}.

---

##### `FilePath`<sup>Optional</sup> <a name="FilePath" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.filePath"></a>

```csharp
public string FilePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#file_path Dashboard#file_path}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#id Dashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LifecycleState`<sup>Optional</sup> <a name="LifecycleState" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#lifecycle_state Dashboard#lifecycle_state}.

---

##### `Md5`<sup>Optional</sup> <a name="Md5" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.md5"></a>

```csharp
public string Md5 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#md5 Dashboard#md5}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#path Dashboard#path}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.providerConfig"></a>

```csharp
public DashboardProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfig">DashboardProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#provider_config Dashboard#provider_config}

---

##### `SerializedDashboard`<sup>Optional</sup> <a name="SerializedDashboard" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.serializedDashboard"></a>

```csharp
public string SerializedDashboard { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#serialized_dashboard Dashboard#serialized_dashboard}.

---

##### `UpdateTime`<sup>Optional</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#update_time Dashboard#update_time}.

---

### DashboardProviderConfig <a name="DashboardProviderConfig" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DashboardProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#workspace_id Dashboard#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/dashboard#workspace_id Dashboard#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DashboardProviderConfigOutputReference <a name="DashboardProviderConfigOutputReference" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DashboardProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfig">DashboardProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.internalValue"></a>

```csharp
public DashboardProviderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfig">DashboardProviderConfig</a>

---



