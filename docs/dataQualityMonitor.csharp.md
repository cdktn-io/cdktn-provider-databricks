# `dataQualityMonitor` Submodule <a name="`dataQualityMonitor` Submodule" id="@cdktn/provider-databricks.dataQualityMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataQualityMonitor <a name="DataQualityMonitor" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor databricks_data_quality_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitor(Construct Scope, string Id, DataQualityMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig">DataQualityMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig">DataQualityMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.putAnomalyDetectionConfig">PutAnomalyDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.putDataProfilingConfig">PutDataProfilingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.resetAnomalyDetectionConfig">ResetAnomalyDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.resetDataProfilingConfig">ResetDataProfilingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnomalyDetectionConfig` <a name="PutAnomalyDetectionConfig" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.putAnomalyDetectionConfig"></a>

```csharp
private void PutAnomalyDetectionConfig(DataQualityMonitorAnomalyDetectionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.putAnomalyDetectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig">DataQualityMonitorAnomalyDetectionConfig</a>

---

##### `PutDataProfilingConfig` <a name="PutDataProfilingConfig" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.putDataProfilingConfig"></a>

```csharp
private void PutDataProfilingConfig(DataQualityMonitorDataProfilingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.putDataProfilingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig">DataQualityMonitorDataProfilingConfig</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataQualityMonitorProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfig">DataQualityMonitorProviderConfig</a>

---

##### `ResetAnomalyDetectionConfig` <a name="ResetAnomalyDetectionConfig" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.resetAnomalyDetectionConfig"></a>

```csharp
private void ResetAnomalyDetectionConfig()
```

##### `ResetDataProfilingConfig` <a name="ResetDataProfilingConfig" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.resetDataProfilingConfig"></a>

```csharp
private void ResetDataProfilingConfig()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataQualityMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataQualityMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataQualityMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataQualityMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataQualityMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataQualityMonitor resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataQualityMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataQualityMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataQualityMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.anomalyDetectionConfig">AnomalyDetectionConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference">DataQualityMonitorAnomalyDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.dataProfilingConfig">DataProfilingConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference">DataQualityMonitorDataProfilingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference">DataQualityMonitorProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.anomalyDetectionConfigInput">AnomalyDetectionConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig">DataQualityMonitorAnomalyDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.dataProfilingConfigInput">DataProfilingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig">DataQualityMonitorDataProfilingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.objectTypeInput">ObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfig">DataQualityMonitorProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AnomalyDetectionConfig`<sup>Required</sup> <a name="AnomalyDetectionConfig" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.anomalyDetectionConfig"></a>

```csharp
public DataQualityMonitorAnomalyDetectionConfigOutputReference AnomalyDetectionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference">DataQualityMonitorAnomalyDetectionConfigOutputReference</a>

---

##### `DataProfilingConfig`<sup>Required</sup> <a name="DataProfilingConfig" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.dataProfilingConfig"></a>

```csharp
public DataQualityMonitorDataProfilingConfigOutputReference DataProfilingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference">DataQualityMonitorDataProfilingConfigOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.providerConfig"></a>

```csharp
public DataQualityMonitorProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference">DataQualityMonitorProviderConfigOutputReference</a>

---

##### `AnomalyDetectionConfigInput`<sup>Optional</sup> <a name="AnomalyDetectionConfigInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.anomalyDetectionConfigInput"></a>

```csharp
public IResolvable|DataQualityMonitorAnomalyDetectionConfig AnomalyDetectionConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig">DataQualityMonitorAnomalyDetectionConfig</a>

---

##### `DataProfilingConfigInput`<sup>Optional</sup> <a name="DataProfilingConfigInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.dataProfilingConfigInput"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfig DataProfilingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig">DataQualityMonitorDataProfilingConfig</a>

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.objectTypeInput"></a>

```csharp
public string ObjectTypeInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.providerConfigInput"></a>

```csharp
public IResolvable|DataQualityMonitorProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfig">DataQualityMonitorProviderConfig</a>

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataQualityMonitorAnomalyDetectionConfig <a name="DataQualityMonitorAnomalyDetectionConfig" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorAnomalyDetectionConfig {
    string[] ExcludedTableFullNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig.property.excludedTableFullNames">ExcludedTableFullNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#excluded_table_full_names DataQualityMonitor#excluded_table_full_names}. |

---

##### `ExcludedTableFullNames`<sup>Optional</sup> <a name="ExcludedTableFullNames" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig.property.excludedTableFullNames"></a>

```csharp
public string[] ExcludedTableFullNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#excluded_table_full_names DataQualityMonitor#excluded_table_full_names}.

---

### DataQualityMonitorConfig <a name="DataQualityMonitorConfig" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ObjectId,
    string ObjectType,
    DataQualityMonitorAnomalyDetectionConfig AnomalyDetectionConfig = null,
    DataQualityMonitorDataProfilingConfig DataProfilingConfig = null,
    DataQualityMonitorProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.objectId">ObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#object_id DataQualityMonitor#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.objectType">ObjectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#object_type DataQualityMonitor#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.anomalyDetectionConfig">AnomalyDetectionConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig">DataQualityMonitorAnomalyDetectionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#anomaly_detection_config DataQualityMonitor#anomaly_detection_config}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.dataProfilingConfig">DataProfilingConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig">DataQualityMonitorDataProfilingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#data_profiling_config DataQualityMonitor#data_profiling_config}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfig">DataQualityMonitorProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#provider_config DataQualityMonitor#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#object_id DataQualityMonitor#object_id}.

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.objectType"></a>

```csharp
public string ObjectType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#object_type DataQualityMonitor#object_type}.

---

##### `AnomalyDetectionConfig`<sup>Optional</sup> <a name="AnomalyDetectionConfig" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.anomalyDetectionConfig"></a>

```csharp
public DataQualityMonitorAnomalyDetectionConfig AnomalyDetectionConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig">DataQualityMonitorAnomalyDetectionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#anomaly_detection_config DataQualityMonitor#anomaly_detection_config}.

---

##### `DataProfilingConfig`<sup>Optional</sup> <a name="DataProfilingConfig" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.dataProfilingConfig"></a>

```csharp
public DataQualityMonitorDataProfilingConfig DataProfilingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig">DataQualityMonitorDataProfilingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#data_profiling_config DataQualityMonitor#data_profiling_config}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.providerConfig"></a>

```csharp
public DataQualityMonitorProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfig">DataQualityMonitorProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#provider_config DataQualityMonitor#provider_config}.

---

### DataQualityMonitorDataProfilingConfig <a name="DataQualityMonitorDataProfilingConfig" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorDataProfilingConfig {
    string OutputSchemaId,
    string AssetsDir = null,
    string BaselineTableName = null,
    IResolvable|DataQualityMonitorDataProfilingConfigCustomMetrics[] CustomMetrics = null,
    DataQualityMonitorDataProfilingConfigInferenceLog InferenceLog = null,
    DataQualityMonitorDataProfilingConfigNotificationSettings NotificationSettings = null,
    DataQualityMonitorDataProfilingConfigSchedule Schedule = null,
    bool|IResolvable SkipBuiltinDashboard = null,
    string[] SlicingExprs = null,
    DataQualityMonitorDataProfilingConfigSnapshot Snapshot = null,
    DataQualityMonitorDataProfilingConfigTimeSeries TimeSeries = null,
    string WarehouseId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.outputSchemaId">OutputSchemaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#output_schema_id DataQualityMonitor#output_schema_id}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.assetsDir">AssetsDir</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#assets_dir DataQualityMonitor#assets_dir}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.baselineTableName">BaselineTableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#baseline_table_name DataQualityMonitor#baseline_table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.customMetrics">CustomMetrics</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#custom_metrics DataQualityMonitor#custom_metrics}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.inferenceLog">InferenceLog</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog">DataQualityMonitorDataProfilingConfigInferenceLog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#inference_log DataQualityMonitor#inference_log}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings">DataQualityMonitorDataProfilingConfigNotificationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#notification_settings DataQualityMonitor#notification_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule">DataQualityMonitorDataProfilingConfigSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#schedule DataQualityMonitor#schedule}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.skipBuiltinDashboard">SkipBuiltinDashboard</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#skip_builtin_dashboard DataQualityMonitor#skip_builtin_dashboard}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.slicingExprs">SlicingExprs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#slicing_exprs DataQualityMonitor#slicing_exprs}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot">DataQualityMonitorDataProfilingConfigSnapshot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#snapshot DataQualityMonitor#snapshot}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.timeSeries">TimeSeries</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries">DataQualityMonitorDataProfilingConfigTimeSeries</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#time_series DataQualityMonitor#time_series}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.warehouseId">WarehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#warehouse_id DataQualityMonitor#warehouse_id}. |

---

##### `OutputSchemaId`<sup>Required</sup> <a name="OutputSchemaId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.outputSchemaId"></a>

```csharp
public string OutputSchemaId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#output_schema_id DataQualityMonitor#output_schema_id}.

---

##### `AssetsDir`<sup>Optional</sup> <a name="AssetsDir" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.assetsDir"></a>

```csharp
public string AssetsDir { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#assets_dir DataQualityMonitor#assets_dir}.

---

##### `BaselineTableName`<sup>Optional</sup> <a name="BaselineTableName" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.baselineTableName"></a>

```csharp
public string BaselineTableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#baseline_table_name DataQualityMonitor#baseline_table_name}.

---

##### `CustomMetrics`<sup>Optional</sup> <a name="CustomMetrics" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.customMetrics"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfigCustomMetrics[] CustomMetrics { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#custom_metrics DataQualityMonitor#custom_metrics}.

---

##### `InferenceLog`<sup>Optional</sup> <a name="InferenceLog" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.inferenceLog"></a>

```csharp
public DataQualityMonitorDataProfilingConfigInferenceLog InferenceLog { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog">DataQualityMonitorDataProfilingConfigInferenceLog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#inference_log DataQualityMonitor#inference_log}.

---

##### `NotificationSettings`<sup>Optional</sup> <a name="NotificationSettings" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.notificationSettings"></a>

```csharp
public DataQualityMonitorDataProfilingConfigNotificationSettings NotificationSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings">DataQualityMonitorDataProfilingConfigNotificationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#notification_settings DataQualityMonitor#notification_settings}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.schedule"></a>

```csharp
public DataQualityMonitorDataProfilingConfigSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule">DataQualityMonitorDataProfilingConfigSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#schedule DataQualityMonitor#schedule}.

---

##### `SkipBuiltinDashboard`<sup>Optional</sup> <a name="SkipBuiltinDashboard" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.skipBuiltinDashboard"></a>

```csharp
public bool|IResolvable SkipBuiltinDashboard { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#skip_builtin_dashboard DataQualityMonitor#skip_builtin_dashboard}.

---

##### `SlicingExprs`<sup>Optional</sup> <a name="SlicingExprs" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.slicingExprs"></a>

```csharp
public string[] SlicingExprs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#slicing_exprs DataQualityMonitor#slicing_exprs}.

---

##### `Snapshot`<sup>Optional</sup> <a name="Snapshot" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.snapshot"></a>

```csharp
public DataQualityMonitorDataProfilingConfigSnapshot Snapshot { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot">DataQualityMonitorDataProfilingConfigSnapshot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#snapshot DataQualityMonitor#snapshot}.

---

##### `TimeSeries`<sup>Optional</sup> <a name="TimeSeries" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.timeSeries"></a>

```csharp
public DataQualityMonitorDataProfilingConfigTimeSeries TimeSeries { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries">DataQualityMonitorDataProfilingConfigTimeSeries</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#time_series DataQualityMonitor#time_series}.

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.warehouseId"></a>

```csharp
public string WarehouseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#warehouse_id DataQualityMonitor#warehouse_id}.

---

### DataQualityMonitorDataProfilingConfigCustomMetrics <a name="DataQualityMonitorDataProfilingConfigCustomMetrics" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorDataProfilingConfigCustomMetrics {
    string Definition,
    string[] InputColumns,
    string Name,
    string OutputDataType,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.definition">Definition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#definition DataQualityMonitor#definition}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.inputColumns">InputColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#input_columns DataQualityMonitor#input_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#name DataQualityMonitor#name}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.outputDataType">OutputDataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#output_data_type DataQualityMonitor#output_data_type}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#type DataQualityMonitor#type}. |

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.definition"></a>

```csharp
public string Definition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#definition DataQualityMonitor#definition}.

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.inputColumns"></a>

```csharp
public string[] InputColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#input_columns DataQualityMonitor#input_columns}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#name DataQualityMonitor#name}.

---

##### `OutputDataType`<sup>Required</sup> <a name="OutputDataType" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.outputDataType"></a>

```csharp
public string OutputDataType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#output_data_type DataQualityMonitor#output_data_type}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#type DataQualityMonitor#type}.

---

### DataQualityMonitorDataProfilingConfigInferenceLog <a name="DataQualityMonitorDataProfilingConfigInferenceLog" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorDataProfilingConfigInferenceLog {
    string[] Granularities,
    string ModelIdColumn,
    string PredictionColumn,
    string ProblemType,
    string TimestampColumn,
    string LabelColumn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.granularities">Granularities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#granularities DataQualityMonitor#granularities}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.modelIdColumn">ModelIdColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#model_id_column DataQualityMonitor#model_id_column}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.predictionColumn">PredictionColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#prediction_column DataQualityMonitor#prediction_column}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.problemType">ProblemType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#problem_type DataQualityMonitor#problem_type}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.timestampColumn">TimestampColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#timestamp_column DataQualityMonitor#timestamp_column}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.labelColumn">LabelColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#label_column DataQualityMonitor#label_column}. |

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.granularities"></a>

```csharp
public string[] Granularities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#granularities DataQualityMonitor#granularities}.

---

##### `ModelIdColumn`<sup>Required</sup> <a name="ModelIdColumn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.modelIdColumn"></a>

```csharp
public string ModelIdColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#model_id_column DataQualityMonitor#model_id_column}.

---

##### `PredictionColumn`<sup>Required</sup> <a name="PredictionColumn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.predictionColumn"></a>

```csharp
public string PredictionColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#prediction_column DataQualityMonitor#prediction_column}.

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.problemType"></a>

```csharp
public string ProblemType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#problem_type DataQualityMonitor#problem_type}.

---

##### `TimestampColumn`<sup>Required</sup> <a name="TimestampColumn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.timestampColumn"></a>

```csharp
public string TimestampColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#timestamp_column DataQualityMonitor#timestamp_column}.

---

##### `LabelColumn`<sup>Optional</sup> <a name="LabelColumn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.labelColumn"></a>

```csharp
public string LabelColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#label_column DataQualityMonitor#label_column}.

---

### DataQualityMonitorDataProfilingConfigNotificationSettings <a name="DataQualityMonitorDataProfilingConfigNotificationSettings" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorDataProfilingConfigNotificationSettings {
    DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure OnFailure = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#on_failure DataQualityMonitor#on_failure}. |

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings.property.onFailure"></a>

```csharp
public DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure OnFailure { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#on_failure DataQualityMonitor#on_failure}.

---

### DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure <a name="DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure {
    string[] EmailAddresses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#email_addresses DataQualityMonitor#email_addresses}. |

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#email_addresses DataQualityMonitor#email_addresses}.

---

### DataQualityMonitorDataProfilingConfigSchedule <a name="DataQualityMonitorDataProfilingConfigSchedule" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorDataProfilingConfigSchedule {
    string QuartzCronExpression,
    string TimezoneId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule.property.quartzCronExpression">QuartzCronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#quartz_cron_expression DataQualityMonitor#quartz_cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule.property.timezoneId">TimezoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#timezone_id DataQualityMonitor#timezone_id}. |

---

##### `QuartzCronExpression`<sup>Required</sup> <a name="QuartzCronExpression" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule.property.quartzCronExpression"></a>

```csharp
public string QuartzCronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#quartz_cron_expression DataQualityMonitor#quartz_cron_expression}.

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule.property.timezoneId"></a>

```csharp
public string TimezoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#timezone_id DataQualityMonitor#timezone_id}.

---

### DataQualityMonitorDataProfilingConfigSnapshot <a name="DataQualityMonitorDataProfilingConfigSnapshot" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorDataProfilingConfigSnapshot {

};
```


### DataQualityMonitorDataProfilingConfigTimeSeries <a name="DataQualityMonitorDataProfilingConfigTimeSeries" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorDataProfilingConfigTimeSeries {
    string[] Granularities,
    string TimestampColumn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries.property.granularities">Granularities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#granularities DataQualityMonitor#granularities}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries.property.timestampColumn">TimestampColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#timestamp_column DataQualityMonitor#timestamp_column}. |

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries.property.granularities"></a>

```csharp
public string[] Granularities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#granularities DataQualityMonitor#granularities}.

---

##### `TimestampColumn`<sup>Required</sup> <a name="TimestampColumn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries.property.timestampColumn"></a>

```csharp
public string TimestampColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#timestamp_column DataQualityMonitor#timestamp_column}.

---

### DataQualityMonitorProviderConfig <a name="DataQualityMonitorProviderConfig" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#workspace_id DataQualityMonitor#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/data_quality_monitor#workspace_id DataQualityMonitor#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataQualityMonitorAnomalyDetectionConfigOutputReference <a name="DataQualityMonitorAnomalyDetectionConfigOutputReference" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorAnomalyDetectionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.resetExcludedTableFullNames">ResetExcludedTableFullNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedTableFullNames` <a name="ResetExcludedTableFullNames" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.resetExcludedTableFullNames"></a>

```csharp
private void ResetExcludedTableFullNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput">ExcludedTableFullNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.property.excludedTableFullNames">ExcludedTableFullNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig">DataQualityMonitorAnomalyDetectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludedTableFullNamesInput`<sup>Optional</sup> <a name="ExcludedTableFullNamesInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput"></a>

```csharp
public string[] ExcludedTableFullNamesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedTableFullNames`<sup>Required</sup> <a name="ExcludedTableFullNames" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.property.excludedTableFullNames"></a>

```csharp
public string[] ExcludedTableFullNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataQualityMonitorAnomalyDetectionConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig">DataQualityMonitorAnomalyDetectionConfig</a>

---


### DataQualityMonitorDataProfilingConfigCustomMetricsList <a name="DataQualityMonitorDataProfilingConfigCustomMetricsList" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorDataProfilingConfigCustomMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.get"></a>

```csharp
private DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.property.internalValue"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfigCustomMetrics[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a>[]

---


### DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference <a name="DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumnsInput">InputColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataTypeInput">OutputDataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definition">Definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumns">InputColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataType">OutputDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definitionInput"></a>

```csharp
public string DefinitionInput { get; }
```

- *Type:* string

---

##### `InputColumnsInput`<sup>Optional</sup> <a name="InputColumnsInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumnsInput"></a>

```csharp
public string[] InputColumnsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputDataTypeInput`<sup>Optional</sup> <a name="OutputDataTypeInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```csharp
public string OutputDataTypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definition"></a>

```csharp
public string Definition { get; }
```

- *Type:* string

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumns"></a>

```csharp
public string[] InputColumns { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputDataType`<sup>Required</sup> <a name="OutputDataType" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataType"></a>

```csharp
public string OutputDataType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfigCustomMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a>

---


### DataQualityMonitorDataProfilingConfigInferenceLogOutputReference <a name="DataQualityMonitorDataProfilingConfigInferenceLogOutputReference" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorDataProfilingConfigInferenceLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resetLabelColumn">ResetLabelColumn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabelColumn` <a name="ResetLabelColumn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resetLabelColumn"></a>

```csharp
private void ResetLabelColumn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularitiesInput">GranularitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumnInput">LabelColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumnInput">ModelIdColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumnInput">PredictionColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemTypeInput">ProblemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumnInput">TimestampColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularities">Granularities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumn">LabelColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumn">ModelIdColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumn">PredictionColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemType">ProblemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumn">TimestampColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog">DataQualityMonitorDataProfilingConfigInferenceLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GranularitiesInput`<sup>Optional</sup> <a name="GranularitiesInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularitiesInput"></a>

```csharp
public string[] GranularitiesInput { get; }
```

- *Type:* string[]

---

##### `LabelColumnInput`<sup>Optional</sup> <a name="LabelColumnInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumnInput"></a>

```csharp
public string LabelColumnInput { get; }
```

- *Type:* string

---

##### `ModelIdColumnInput`<sup>Optional</sup> <a name="ModelIdColumnInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumnInput"></a>

```csharp
public string ModelIdColumnInput { get; }
```

- *Type:* string

---

##### `PredictionColumnInput`<sup>Optional</sup> <a name="PredictionColumnInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumnInput"></a>

```csharp
public string PredictionColumnInput { get; }
```

- *Type:* string

---

##### `ProblemTypeInput`<sup>Optional</sup> <a name="ProblemTypeInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemTypeInput"></a>

```csharp
public string ProblemTypeInput { get; }
```

- *Type:* string

---

##### `TimestampColumnInput`<sup>Optional</sup> <a name="TimestampColumnInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumnInput"></a>

```csharp
public string TimestampColumnInput { get; }
```

- *Type:* string

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularities"></a>

```csharp
public string[] Granularities { get; }
```

- *Type:* string[]

---

##### `LabelColumn`<sup>Required</sup> <a name="LabelColumn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumn"></a>

```csharp
public string LabelColumn { get; }
```

- *Type:* string

---

##### `ModelIdColumn`<sup>Required</sup> <a name="ModelIdColumn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumn"></a>

```csharp
public string ModelIdColumn { get; }
```

- *Type:* string

---

##### `PredictionColumn`<sup>Required</sup> <a name="PredictionColumn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumn"></a>

```csharp
public string PredictionColumn { get; }
```

- *Type:* string

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemType"></a>

```csharp
public string ProblemType { get; }
```

- *Type:* string

---

##### `TimestampColumn`<sup>Required</sup> <a name="TimestampColumn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumn"></a>

```csharp
public string TimestampColumn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfigInferenceLog InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog">DataQualityMonitorDataProfilingConfigInferenceLog</a>

---


### DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference <a name="DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses"></a>

```csharp
private void ResetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput"></a>

```csharp
public string[] EmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

---


### DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference <a name="DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.putOnFailure">PutOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resetOnFailure">ResetOnFailure</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnFailure` <a name="PutOnFailure" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.putOnFailure"></a>

```csharp
private void PutOnFailure(DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

---

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resetOnFailure"></a>

```csharp
private void ResetOnFailure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailureInput">OnFailureInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings">DataQualityMonitorDataProfilingConfigNotificationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailure"></a>

```csharp
public DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference OnFailure { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference</a>

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailureInput"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure OnFailureInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfigNotificationSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings">DataQualityMonitorDataProfilingConfigNotificationSettings</a>

---


### DataQualityMonitorDataProfilingConfigOutputReference <a name="DataQualityMonitorDataProfilingConfigOutputReference" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorDataProfilingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putCustomMetrics">PutCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog">PutInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putNotificationSettings">PutNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putSnapshot">PutSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putTimeSeries">PutTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetAssetsDir">ResetAssetsDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetBaselineTableName">ResetBaselineTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetCustomMetrics">ResetCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetInferenceLog">ResetInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetNotificationSettings">ResetNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetSkipBuiltinDashboard">ResetSkipBuiltinDashboard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetSlicingExprs">ResetSlicingExprs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetSnapshot">ResetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetTimeSeries">ResetTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomMetrics` <a name="PutCustomMetrics" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putCustomMetrics"></a>

```csharp
private void PutCustomMetrics(IResolvable|DataQualityMonitorDataProfilingConfigCustomMetrics[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putCustomMetrics.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a>[]

---

##### `PutInferenceLog` <a name="PutInferenceLog" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog"></a>

```csharp
private void PutInferenceLog(DataQualityMonitorDataProfilingConfigInferenceLog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog">DataQualityMonitorDataProfilingConfigInferenceLog</a>

---

##### `PutNotificationSettings` <a name="PutNotificationSettings" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putNotificationSettings"></a>

```csharp
private void PutNotificationSettings(DataQualityMonitorDataProfilingConfigNotificationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings">DataQualityMonitorDataProfilingConfigNotificationSettings</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putSchedule"></a>

```csharp
private void PutSchedule(DataQualityMonitorDataProfilingConfigSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule">DataQualityMonitorDataProfilingConfigSchedule</a>

---

##### `PutSnapshot` <a name="PutSnapshot" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putSnapshot"></a>

```csharp
private void PutSnapshot(DataQualityMonitorDataProfilingConfigSnapshot Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot">DataQualityMonitorDataProfilingConfigSnapshot</a>

---

##### `PutTimeSeries` <a name="PutTimeSeries" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putTimeSeries"></a>

```csharp
private void PutTimeSeries(DataQualityMonitorDataProfilingConfigTimeSeries Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putTimeSeries.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries">DataQualityMonitorDataProfilingConfigTimeSeries</a>

---

##### `ResetAssetsDir` <a name="ResetAssetsDir" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetAssetsDir"></a>

```csharp
private void ResetAssetsDir()
```

##### `ResetBaselineTableName` <a name="ResetBaselineTableName" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetBaselineTableName"></a>

```csharp
private void ResetBaselineTableName()
```

##### `ResetCustomMetrics` <a name="ResetCustomMetrics" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetCustomMetrics"></a>

```csharp
private void ResetCustomMetrics()
```

##### `ResetInferenceLog` <a name="ResetInferenceLog" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetInferenceLog"></a>

```csharp
private void ResetInferenceLog()
```

##### `ResetNotificationSettings` <a name="ResetNotificationSettings" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetNotificationSettings"></a>

```csharp
private void ResetNotificationSettings()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetSkipBuiltinDashboard` <a name="ResetSkipBuiltinDashboard" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetSkipBuiltinDashboard"></a>

```csharp
private void ResetSkipBuiltinDashboard()
```

##### `ResetSlicingExprs` <a name="ResetSlicingExprs" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetSlicingExprs"></a>

```csharp
private void ResetSlicingExprs()
```

##### `ResetSnapshot` <a name="ResetSnapshot" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetSnapshot"></a>

```csharp
private void ResetSnapshot()
```

##### `ResetTimeSeries` <a name="ResetTimeSeries" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetTimeSeries"></a>

```csharp
private void ResetTimeSeries()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetWarehouseId"></a>

```csharp
private void ResetWarehouseId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.customMetrics">CustomMetrics</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList">DataQualityMonitorDataProfilingConfigCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.dashboardId">DashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.driftMetricsTableName">DriftMetricsTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.effectiveWarehouseId">EffectiveWarehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLog">InferenceLog</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference">DataQualityMonitorDataProfilingConfigInferenceLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.latestMonitorFailureMessage">LatestMonitorFailureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.monitoredTableName">MonitoredTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.monitorVersion">MonitorVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference">DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.profileMetricsTableName">ProfileMetricsTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference">DataQualityMonitorDataProfilingConfigScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference">DataQualityMonitorDataProfilingConfigSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.timeSeries">TimeSeries</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference">DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.assetsDirInput">AssetsDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableNameInput">BaselineTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.customMetricsInput">CustomMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLogInput">InferenceLogInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog">DataQualityMonitorDataProfilingConfigInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettingsInput">NotificationSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings">DataQualityMonitorDataProfilingConfigNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaIdInput">OutputSchemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule">DataQualityMonitorDataProfilingConfigSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboardInput">SkipBuiltinDashboardInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprsInput">SlicingExprsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.snapshotInput">SnapshotInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot">DataQualityMonitorDataProfilingConfigSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.timeSeriesInput">TimeSeriesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries">DataQualityMonitorDataProfilingConfigTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.assetsDir">AssetsDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableName">BaselineTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaId">OutputSchemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboard">SkipBuiltinDashboard</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprs">SlicingExprs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.warehouseId">WarehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig">DataQualityMonitorDataProfilingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomMetrics`<sup>Required</sup> <a name="CustomMetrics" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.customMetrics"></a>

```csharp
public DataQualityMonitorDataProfilingConfigCustomMetricsList CustomMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList">DataQualityMonitorDataProfilingConfigCustomMetricsList</a>

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.dashboardId"></a>

```csharp
public string DashboardId { get; }
```

- *Type:* string

---

##### `DriftMetricsTableName`<sup>Required</sup> <a name="DriftMetricsTableName" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.driftMetricsTableName"></a>

```csharp
public string DriftMetricsTableName { get; }
```

- *Type:* string

---

##### `EffectiveWarehouseId`<sup>Required</sup> <a name="EffectiveWarehouseId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.effectiveWarehouseId"></a>

```csharp
public string EffectiveWarehouseId { get; }
```

- *Type:* string

---

##### `InferenceLog`<sup>Required</sup> <a name="InferenceLog" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLog"></a>

```csharp
public DataQualityMonitorDataProfilingConfigInferenceLogOutputReference InferenceLog { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference">DataQualityMonitorDataProfilingConfigInferenceLogOutputReference</a>

---

##### `LatestMonitorFailureMessage`<sup>Required</sup> <a name="LatestMonitorFailureMessage" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.latestMonitorFailureMessage"></a>

```csharp
public string LatestMonitorFailureMessage { get; }
```

- *Type:* string

---

##### `MonitoredTableName`<sup>Required</sup> <a name="MonitoredTableName" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.monitoredTableName"></a>

```csharp
public string MonitoredTableName { get; }
```

- *Type:* string

---

##### `MonitorVersion`<sup>Required</sup> <a name="MonitorVersion" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.monitorVersion"></a>

```csharp
public double MonitorVersion { get; }
```

- *Type:* double

---

##### `NotificationSettings`<sup>Required</sup> <a name="NotificationSettings" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettings"></a>

```csharp
public DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference NotificationSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference">DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference</a>

---

##### `ProfileMetricsTableName`<sup>Required</sup> <a name="ProfileMetricsTableName" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.profileMetricsTableName"></a>

```csharp
public string ProfileMetricsTableName { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.schedule"></a>

```csharp
public DataQualityMonitorDataProfilingConfigScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference">DataQualityMonitorDataProfilingConfigScheduleOutputReference</a>

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.snapshot"></a>

```csharp
public DataQualityMonitorDataProfilingConfigSnapshotOutputReference Snapshot { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference">DataQualityMonitorDataProfilingConfigSnapshotOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeSeries`<sup>Required</sup> <a name="TimeSeries" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.timeSeries"></a>

```csharp
public DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference TimeSeries { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference">DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference</a>

---

##### `AssetsDirInput`<sup>Optional</sup> <a name="AssetsDirInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.assetsDirInput"></a>

```csharp
public string AssetsDirInput { get; }
```

- *Type:* string

---

##### `BaselineTableNameInput`<sup>Optional</sup> <a name="BaselineTableNameInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableNameInput"></a>

```csharp
public string BaselineTableNameInput { get; }
```

- *Type:* string

---

##### `CustomMetricsInput`<sup>Optional</sup> <a name="CustomMetricsInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.customMetricsInput"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfigCustomMetrics[] CustomMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a>[]

---

##### `InferenceLogInput`<sup>Optional</sup> <a name="InferenceLogInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLogInput"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfigInferenceLog InferenceLogInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog">DataQualityMonitorDataProfilingConfigInferenceLog</a>

---

##### `NotificationSettingsInput`<sup>Optional</sup> <a name="NotificationSettingsInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettingsInput"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfigNotificationSettings NotificationSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings">DataQualityMonitorDataProfilingConfigNotificationSettings</a>

---

##### `OutputSchemaIdInput`<sup>Optional</sup> <a name="OutputSchemaIdInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaIdInput"></a>

```csharp
public string OutputSchemaIdInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.scheduleInput"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfigSchedule ScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule">DataQualityMonitorDataProfilingConfigSchedule</a>

---

##### `SkipBuiltinDashboardInput`<sup>Optional</sup> <a name="SkipBuiltinDashboardInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboardInput"></a>

```csharp
public bool|IResolvable SkipBuiltinDashboardInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SlicingExprsInput`<sup>Optional</sup> <a name="SlicingExprsInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprsInput"></a>

```csharp
public string[] SlicingExprsInput { get; }
```

- *Type:* string[]

---

##### `SnapshotInput`<sup>Optional</sup> <a name="SnapshotInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.snapshotInput"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfigSnapshot SnapshotInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot">DataQualityMonitorDataProfilingConfigSnapshot</a>

---

##### `TimeSeriesInput`<sup>Optional</sup> <a name="TimeSeriesInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.timeSeriesInput"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfigTimeSeries TimeSeriesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries">DataQualityMonitorDataProfilingConfigTimeSeries</a>

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.warehouseIdInput"></a>

```csharp
public string WarehouseIdInput { get; }
```

- *Type:* string

---

##### `AssetsDir`<sup>Required</sup> <a name="AssetsDir" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.assetsDir"></a>

```csharp
public string AssetsDir { get; }
```

- *Type:* string

---

##### `BaselineTableName`<sup>Required</sup> <a name="BaselineTableName" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableName"></a>

```csharp
public string BaselineTableName { get; }
```

- *Type:* string

---

##### `OutputSchemaId`<sup>Required</sup> <a name="OutputSchemaId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaId"></a>

```csharp
public string OutputSchemaId { get; }
```

- *Type:* string

---

##### `SkipBuiltinDashboard`<sup>Required</sup> <a name="SkipBuiltinDashboard" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboard"></a>

```csharp
public bool|IResolvable SkipBuiltinDashboard { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SlicingExprs`<sup>Required</sup> <a name="SlicingExprs" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprs"></a>

```csharp
public string[] SlicingExprs { get; }
```

- *Type:* string[]

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.warehouseId"></a>

```csharp
public string WarehouseId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig">DataQualityMonitorDataProfilingConfig</a>

---


### DataQualityMonitorDataProfilingConfigScheduleOutputReference <a name="DataQualityMonitorDataProfilingConfigScheduleOutputReference" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorDataProfilingConfigScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.pauseStatus">PauseStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpressionInput">QuartzCronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneIdInput">TimezoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpression">QuartzCronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneId">TimezoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule">DataQualityMonitorDataProfilingConfigSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PauseStatus`<sup>Required</sup> <a name="PauseStatus" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.pauseStatus"></a>

```csharp
public string PauseStatus { get; }
```

- *Type:* string

---

##### `QuartzCronExpressionInput`<sup>Optional</sup> <a name="QuartzCronExpressionInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpressionInput"></a>

```csharp
public string QuartzCronExpressionInput { get; }
```

- *Type:* string

---

##### `TimezoneIdInput`<sup>Optional</sup> <a name="TimezoneIdInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneIdInput"></a>

```csharp
public string TimezoneIdInput { get; }
```

- *Type:* string

---

##### `QuartzCronExpression`<sup>Required</sup> <a name="QuartzCronExpression" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpression"></a>

```csharp
public string QuartzCronExpression { get; }
```

- *Type:* string

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneId"></a>

```csharp
public string TimezoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfigSchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule">DataQualityMonitorDataProfilingConfigSchedule</a>

---


### DataQualityMonitorDataProfilingConfigSnapshotOutputReference <a name="DataQualityMonitorDataProfilingConfigSnapshotOutputReference" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorDataProfilingConfigSnapshotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot">DataQualityMonitorDataProfilingConfigSnapshot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfigSnapshot InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot">DataQualityMonitorDataProfilingConfigSnapshot</a>

---


### DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference <a name="DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularitiesInput">GranularitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumnInput">TimestampColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularities">Granularities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumn">TimestampColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries">DataQualityMonitorDataProfilingConfigTimeSeries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GranularitiesInput`<sup>Optional</sup> <a name="GranularitiesInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularitiesInput"></a>

```csharp
public string[] GranularitiesInput { get; }
```

- *Type:* string[]

---

##### `TimestampColumnInput`<sup>Optional</sup> <a name="TimestampColumnInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumnInput"></a>

```csharp
public string TimestampColumnInput { get; }
```

- *Type:* string

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularities"></a>

```csharp
public string[] Granularities { get; }
```

- *Type:* string[]

---

##### `TimestampColumn`<sup>Required</sup> <a name="TimestampColumn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumn"></a>

```csharp
public string TimestampColumn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataQualityMonitorDataProfilingConfigTimeSeries InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries">DataQualityMonitorDataProfilingConfigTimeSeries</a>

---


### DataQualityMonitorProviderConfigOutputReference <a name="DataQualityMonitorProviderConfigOutputReference" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataQualityMonitorProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfig">DataQualityMonitorProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataQualityMonitorProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataQualityMonitor.DataQualityMonitorProviderConfig">DataQualityMonitorProviderConfig</a>

---



