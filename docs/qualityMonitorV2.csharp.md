# `qualityMonitorV2` Submodule <a name="`qualityMonitorV2` Submodule" id="@cdktn/provider-databricks.qualityMonitorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QualityMonitorV2 <a name="QualityMonitorV2" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2 databricks_quality_monitor_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new QualityMonitorV2(Construct Scope, string Id, QualityMonitorV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config">QualityMonitorV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config">QualityMonitorV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.putValidityCheckConfigurations">PutValidityCheckConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.resetValidityCheckConfigurations">ResetValidityCheckConfigurations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.putProviderConfig"></a>

```csharp
private void PutProviderConfig(QualityMonitorV2ProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig">QualityMonitorV2ProviderConfig</a>

---

##### `PutValidityCheckConfigurations` <a name="PutValidityCheckConfigurations" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.putValidityCheckConfigurations"></a>

```csharp
private void PutValidityCheckConfigurations(IResolvable|QualityMonitorV2ValidityCheckConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.putValidityCheckConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a>[]

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetValidityCheckConfigurations` <a name="ResetValidityCheckConfigurations" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.resetValidityCheckConfigurations"></a>

```csharp
private void ResetValidityCheckConfigurations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QualityMonitorV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

QualityMonitorV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

QualityMonitorV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

QualityMonitorV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

QualityMonitorV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a QualityMonitorV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QualityMonitorV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QualityMonitorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the QualityMonitorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.anomalyDetectionConfig">AnomalyDetectionConfig</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference">QualityMonitorV2AnomalyDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference">QualityMonitorV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.validityCheckConfigurations">ValidityCheckConfigurations</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList">QualityMonitorV2ValidityCheckConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.objectTypeInput">ObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig">QualityMonitorV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.validityCheckConfigurationsInput">ValidityCheckConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AnomalyDetectionConfig`<sup>Required</sup> <a name="AnomalyDetectionConfig" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.anomalyDetectionConfig"></a>

```csharp
public QualityMonitorV2AnomalyDetectionConfigOutputReference AnomalyDetectionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference">QualityMonitorV2AnomalyDetectionConfigOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.providerConfig"></a>

```csharp
public QualityMonitorV2ProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference">QualityMonitorV2ProviderConfigOutputReference</a>

---

##### `ValidityCheckConfigurations`<sup>Required</sup> <a name="ValidityCheckConfigurations" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.validityCheckConfigurations"></a>

```csharp
public QualityMonitorV2ValidityCheckConfigurationsList ValidityCheckConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList">QualityMonitorV2ValidityCheckConfigurationsList</a>

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.objectTypeInput"></a>

```csharp
public string ObjectTypeInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.providerConfigInput"></a>

```csharp
public IResolvable|QualityMonitorV2ProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig">QualityMonitorV2ProviderConfig</a>

---

##### `ValidityCheckConfigurationsInput`<sup>Optional</sup> <a name="ValidityCheckConfigurationsInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.validityCheckConfigurationsInput"></a>

```csharp
public IResolvable|QualityMonitorV2ValidityCheckConfigurations[] ValidityCheckConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a>[]

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QualityMonitorV2AnomalyDetectionConfig <a name="QualityMonitorV2AnomalyDetectionConfig" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new QualityMonitorV2AnomalyDetectionConfig {
    string[] ExcludedTableFullNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfig.property.excludedTableFullNames">ExcludedTableFullNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#excluded_table_full_names QualityMonitorV2#excluded_table_full_names}. |

---

##### `ExcludedTableFullNames`<sup>Optional</sup> <a name="ExcludedTableFullNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfig.property.excludedTableFullNames"></a>

```csharp
public string[] ExcludedTableFullNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#excluded_table_full_names QualityMonitorV2#excluded_table_full_names}.

---

### QualityMonitorV2Config <a name="QualityMonitorV2Config" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new QualityMonitorV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ObjectId,
    string ObjectType,
    QualityMonitorV2ProviderConfig ProviderConfig = null,
    IResolvable|QualityMonitorV2ValidityCheckConfigurations[] ValidityCheckConfigurations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.objectId">ObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#object_id QualityMonitorV2#object_id}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.objectType">ObjectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#object_type QualityMonitorV2#object_type}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig">QualityMonitorV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#provider_config QualityMonitorV2#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.validityCheckConfigurations">ValidityCheckConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#validity_check_configurations QualityMonitorV2#validity_check_configurations}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#object_id QualityMonitorV2#object_id}.

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.objectType"></a>

```csharp
public string ObjectType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#object_type QualityMonitorV2#object_type}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.providerConfig"></a>

```csharp
public QualityMonitorV2ProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig">QualityMonitorV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#provider_config QualityMonitorV2#provider_config}.

---

##### `ValidityCheckConfigurations`<sup>Optional</sup> <a name="ValidityCheckConfigurations" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2Config.property.validityCheckConfigurations"></a>

```csharp
public IResolvable|QualityMonitorV2ValidityCheckConfigurations[] ValidityCheckConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#validity_check_configurations QualityMonitorV2#validity_check_configurations}.

---

### QualityMonitorV2ProviderConfig <a name="QualityMonitorV2ProviderConfig" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new QualityMonitorV2ProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#workspace_id QualityMonitorV2#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#workspace_id QualityMonitorV2#workspace_id}.

---

### QualityMonitorV2ValidityCheckConfigurations <a name="QualityMonitorV2ValidityCheckConfigurations" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new QualityMonitorV2ValidityCheckConfigurations {
    string Name = null,
    QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck PercentNullValidityCheck = null,
    QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck RangeValidityCheck = null,
    QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck UniquenessValidityCheck = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#name QualityMonitorV2#name}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.property.percentNullValidityCheck">PercentNullValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#percent_null_validity_check QualityMonitorV2#percent_null_validity_check}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.property.rangeValidityCheck">RangeValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#range_validity_check QualityMonitorV2#range_validity_check}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.property.uniquenessValidityCheck">UniquenessValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#uniqueness_validity_check QualityMonitorV2#uniqueness_validity_check}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#name QualityMonitorV2#name}.

---

##### `PercentNullValidityCheck`<sup>Optional</sup> <a name="PercentNullValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.property.percentNullValidityCheck"></a>

```csharp
public QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck PercentNullValidityCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#percent_null_validity_check QualityMonitorV2#percent_null_validity_check}.

---

##### `RangeValidityCheck`<sup>Optional</sup> <a name="RangeValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.property.rangeValidityCheck"></a>

```csharp
public QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck RangeValidityCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#range_validity_check QualityMonitorV2#range_validity_check}.

---

##### `UniquenessValidityCheck`<sup>Optional</sup> <a name="UniquenessValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations.property.uniquenessValidityCheck"></a>

```csharp
public QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck UniquenessValidityCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#uniqueness_validity_check QualityMonitorV2#uniqueness_validity_check}.

---

### QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck <a name="QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck {
    string[] ColumnNames = null,
    double UpperBound = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#column_names QualityMonitorV2#column_names}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.upperBound">UpperBound</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#upper_bound QualityMonitorV2#upper_bound}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#column_names QualityMonitorV2#column_names}.

---

##### `UpperBound`<sup>Optional</sup> <a name="UpperBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.upperBound"></a>

```csharp
public double UpperBound { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#upper_bound QualityMonitorV2#upper_bound}.

---

### QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck <a name="QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck {
    string[] ColumnNames = null,
    double LowerBound = null,
    double UpperBound = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#column_names QualityMonitorV2#column_names}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.lowerBound">LowerBound</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#lower_bound QualityMonitorV2#lower_bound}. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.upperBound">UpperBound</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#upper_bound QualityMonitorV2#upper_bound}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#column_names QualityMonitorV2#column_names}.

---

##### `LowerBound`<sup>Optional</sup> <a name="LowerBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.lowerBound"></a>

```csharp
public double LowerBound { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#lower_bound QualityMonitorV2#lower_bound}.

---

##### `UpperBound`<sup>Optional</sup> <a name="UpperBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.upperBound"></a>

```csharp
public double UpperBound { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#upper_bound QualityMonitorV2#upper_bound}.

---

### QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck <a name="QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck {
    string[] ColumnNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#column_names QualityMonitorV2#column_names}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/quality_monitor_v2#column_names QualityMonitorV2#column_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### QualityMonitorV2AnomalyDetectionConfigOutputReference <a name="QualityMonitorV2AnomalyDetectionConfigOutputReference" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new QualityMonitorV2AnomalyDetectionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.resetExcludedTableFullNames">ResetExcludedTableFullNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedTableFullNames` <a name="ResetExcludedTableFullNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.resetExcludedTableFullNames"></a>

```csharp
private void ResetExcludedTableFullNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.lastRunId">LastRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.latestRunStatus">LatestRunStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput">ExcludedTableFullNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNames">ExcludedTableFullNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfig">QualityMonitorV2AnomalyDetectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastRunId`<sup>Required</sup> <a name="LastRunId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.lastRunId"></a>

```csharp
public string LastRunId { get; }
```

- *Type:* string

---

##### `LatestRunStatus`<sup>Required</sup> <a name="LatestRunStatus" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.latestRunStatus"></a>

```csharp
public string LatestRunStatus { get; }
```

- *Type:* string

---

##### `ExcludedTableFullNamesInput`<sup>Optional</sup> <a name="ExcludedTableFullNamesInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput"></a>

```csharp
public string[] ExcludedTableFullNamesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedTableFullNames`<sup>Required</sup> <a name="ExcludedTableFullNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNames"></a>

```csharp
public string[] ExcludedTableFullNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfigOutputReference.property.internalValue"></a>

```csharp
public QualityMonitorV2AnomalyDetectionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2AnomalyDetectionConfig">QualityMonitorV2AnomalyDetectionConfig</a>

---


### QualityMonitorV2ProviderConfigOutputReference <a name="QualityMonitorV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new QualityMonitorV2ProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig">QualityMonitorV2ProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QualityMonitorV2ProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ProviderConfig">QualityMonitorV2ProviderConfig</a>

---


### QualityMonitorV2ValidityCheckConfigurationsList <a name="QualityMonitorV2ValidityCheckConfigurationsList" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new QualityMonitorV2ValidityCheckConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.get"></a>

```csharp
private QualityMonitorV2ValidityCheckConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|QualityMonitorV2ValidityCheckConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a>[]

---


### QualityMonitorV2ValidityCheckConfigurationsOutputReference <a name="QualityMonitorV2ValidityCheckConfigurationsOutputReference" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new QualityMonitorV2ValidityCheckConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck">PutPercentNullValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putRangeValidityCheck">PutRangeValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck">PutUniquenessValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resetPercentNullValidityCheck">ResetPercentNullValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resetRangeValidityCheck">ResetRangeValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resetUniquenessValidityCheck">ResetUniquenessValidityCheck</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPercentNullValidityCheck` <a name="PutPercentNullValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck"></a>

```csharp
private void PutPercentNullValidityCheck(QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a>

---

##### `PutRangeValidityCheck` <a name="PutRangeValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putRangeValidityCheck"></a>

```csharp
private void PutRangeValidityCheck(QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putRangeValidityCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a>

---

##### `PutUniquenessValidityCheck` <a name="PutUniquenessValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck"></a>

```csharp
private void PutUniquenessValidityCheck(QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPercentNullValidityCheck` <a name="ResetPercentNullValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resetPercentNullValidityCheck"></a>

```csharp
private void ResetPercentNullValidityCheck()
```

##### `ResetRangeValidityCheck` <a name="ResetRangeValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resetRangeValidityCheck"></a>

```csharp
private void ResetRangeValidityCheck()
```

##### `ResetUniquenessValidityCheck` <a name="ResetUniquenessValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.resetUniquenessValidityCheck"></a>

```csharp
private void ResetUniquenessValidityCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheck">PercentNullValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheck">RangeValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheck">UniquenessValidityCheck</a></code> | <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheckInput">PercentNullValidityCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheckInput">RangeValidityCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheckInput">UniquenessValidityCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentNullValidityCheck`<sup>Required</sup> <a name="PercentNullValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheck"></a>

```csharp
public QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference PercentNullValidityCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference</a>

---

##### `RangeValidityCheck`<sup>Required</sup> <a name="RangeValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheck"></a>

```csharp
public QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference RangeValidityCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference</a>

---

##### `UniquenessValidityCheck`<sup>Required</sup> <a name="UniquenessValidityCheck" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheck"></a>

```csharp
public QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference UniquenessValidityCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PercentNullValidityCheckInput`<sup>Optional</sup> <a name="PercentNullValidityCheckInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheckInput"></a>

```csharp
public IResolvable|QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck PercentNullValidityCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a>

---

##### `RangeValidityCheckInput`<sup>Optional</sup> <a name="RangeValidityCheckInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheckInput"></a>

```csharp
public IResolvable|QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck RangeValidityCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a>

---

##### `UniquenessValidityCheckInput`<sup>Optional</sup> <a name="UniquenessValidityCheckInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheckInput"></a>

```csharp
public IResolvable|QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck UniquenessValidityCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QualityMonitorV2ValidityCheckConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurations">QualityMonitorV2ValidityCheckConfigurations</a>

---


### QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference <a name="QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetUpperBound">ResetUpperBound</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```

##### `ResetUpperBound` <a name="ResetUpperBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetUpperBound"></a>

```csharp
private void ResetUpperBound()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBoundInput">UpperBoundInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBound">UpperBound</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `UpperBoundInput`<sup>Optional</sup> <a name="UpperBoundInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBoundInput"></a>

```csharp
public double UpperBoundInput { get; }
```

- *Type:* double

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `UpperBound`<sup>Required</sup> <a name="UpperBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBound"></a>

```csharp
public double UpperBound { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">QualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a>

---


### QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference <a name="QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetLowerBound">ResetLowerBound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetUpperBound">ResetUpperBound</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```

##### `ResetLowerBound` <a name="ResetLowerBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetLowerBound"></a>

```csharp
private void ResetLowerBound()
```

##### `ResetUpperBound` <a name="ResetUpperBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetUpperBound"></a>

```csharp
private void ResetUpperBound()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBoundInput">LowerBoundInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBoundInput">UpperBoundInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBound">LowerBound</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBound">UpperBound</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `LowerBoundInput`<sup>Optional</sup> <a name="LowerBoundInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBoundInput"></a>

```csharp
public double LowerBoundInput { get; }
```

- *Type:* double

---

##### `UpperBoundInput`<sup>Optional</sup> <a name="UpperBoundInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBoundInput"></a>

```csharp
public double UpperBoundInput { get; }
```

- *Type:* double

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `LowerBound`<sup>Required</sup> <a name="LowerBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBound"></a>

```csharp
public double LowerBound { get; }
```

- *Type:* double

---

##### `UpperBound`<sup>Required</sup> <a name="UpperBound" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBound"></a>

```csharp
public double UpperBound { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">QualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a>

---


### QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference <a name="QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.qualityMonitorV2.QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">QualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a>

---



