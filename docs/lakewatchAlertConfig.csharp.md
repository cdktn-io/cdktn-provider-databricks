# `lakewatchAlertConfig` Submodule <a name="`lakewatchAlertConfig` Submodule" id="@cdktn/provider-databricks.lakewatchAlertConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakewatchAlertConfig <a name="LakewatchAlertConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config databricks_lakewatch_alert_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfig(Construct Scope, string Id, LakewatchAlertConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig">LakewatchAlertConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig">LakewatchAlertConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSecurityAlertExportConfig">PutSecurityAlertExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSystemAlertExportConfig">PutSystemAlertExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetDefaultSecurityAlertCollationWindow">ResetDefaultSecurityAlertCollationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetDefaultSystemAlertCollationWindow">ResetDefaultSystemAlertCollationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetSecurityAlertExportConfig">ResetSecurityAlertExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetSystemAlertExportConfig">ResetSystemAlertExportConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putProviderConfig"></a>

```csharp
private void PutProviderConfig(LakewatchAlertConfigProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a>

---

##### `PutSecurityAlertExportConfig` <a name="PutSecurityAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSecurityAlertExportConfig"></a>

```csharp
private void PutSecurityAlertExportConfig(LakewatchAlertConfigSecurityAlertExportConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSecurityAlertExportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a>

---

##### `PutSystemAlertExportConfig` <a name="PutSystemAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSystemAlertExportConfig"></a>

```csharp
private void PutSystemAlertExportConfig(LakewatchAlertConfigSystemAlertExportConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSystemAlertExportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a>

---

##### `ResetDefaultSecurityAlertCollationWindow` <a name="ResetDefaultSecurityAlertCollationWindow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetDefaultSecurityAlertCollationWindow"></a>

```csharp
private void ResetDefaultSecurityAlertCollationWindow()
```

##### `ResetDefaultSystemAlertCollationWindow` <a name="ResetDefaultSystemAlertCollationWindow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetDefaultSystemAlertCollationWindow"></a>

```csharp
private void ResetDefaultSystemAlertCollationWindow()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetSecurityAlertExportConfig` <a name="ResetSecurityAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetSecurityAlertExportConfig"></a>

```csharp
private void ResetSecurityAlertExportConfig()
```

##### `ResetSystemAlertExportConfig` <a name="ResetSystemAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetSystemAlertExportConfig"></a>

```csharp
private void ResetSystemAlertExportConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LakewatchAlertConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

LakewatchAlertConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

LakewatchAlertConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

LakewatchAlertConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

LakewatchAlertConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LakewatchAlertConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakewatchAlertConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakewatchAlertConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LakewatchAlertConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.effectiveDefaultSecurityAlertCollationWindow">EffectiveDefaultSecurityAlertCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.effectiveDefaultSystemAlertCollationWindow">EffectiveDefaultSystemAlertCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference">LakewatchAlertConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.securityAlertExportConfig">SecurityAlertExportConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference">LakewatchAlertConfigSecurityAlertExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.systemAlertExportConfig">SystemAlertExportConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference">LakewatchAlertConfigSystemAlertExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.updatedBy">UpdatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference">LakewatchAlertConfigUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSecurityAlertCollationWindowInput">DefaultSecurityAlertCollationWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSystemAlertCollationWindowInput">DefaultSystemAlertCollationWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.securityAlertExportConfigInput">SecurityAlertExportConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.systemAlertExportConfigInput">SystemAlertExportConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSecurityAlertCollationWindow">DefaultSecurityAlertCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSystemAlertCollationWindow">DefaultSystemAlertCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EffectiveDefaultSecurityAlertCollationWindow`<sup>Required</sup> <a name="EffectiveDefaultSecurityAlertCollationWindow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.effectiveDefaultSecurityAlertCollationWindow"></a>

```csharp
public string EffectiveDefaultSecurityAlertCollationWindow { get; }
```

- *Type:* string

---

##### `EffectiveDefaultSystemAlertCollationWindow`<sup>Required</sup> <a name="EffectiveDefaultSystemAlertCollationWindow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.effectiveDefaultSystemAlertCollationWindow"></a>

```csharp
public string EffectiveDefaultSystemAlertCollationWindow { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.providerConfig"></a>

```csharp
public LakewatchAlertConfigProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference">LakewatchAlertConfigProviderConfigOutputReference</a>

---

##### `SecurityAlertExportConfig`<sup>Required</sup> <a name="SecurityAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.securityAlertExportConfig"></a>

```csharp
public LakewatchAlertConfigSecurityAlertExportConfigOutputReference SecurityAlertExportConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference">LakewatchAlertConfigSecurityAlertExportConfigOutputReference</a>

---

##### `SystemAlertExportConfig`<sup>Required</sup> <a name="SystemAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.systemAlertExportConfig"></a>

```csharp
public LakewatchAlertConfigSystemAlertExportConfigOutputReference SystemAlertExportConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference">LakewatchAlertConfigSystemAlertExportConfigOutputReference</a>

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.updatedBy"></a>

```csharp
public LakewatchAlertConfigUpdatedByOutputReference UpdatedBy { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference">LakewatchAlertConfigUpdatedByOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `DefaultSecurityAlertCollationWindowInput`<sup>Optional</sup> <a name="DefaultSecurityAlertCollationWindowInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSecurityAlertCollationWindowInput"></a>

```csharp
public string DefaultSecurityAlertCollationWindowInput { get; }
```

- *Type:* string

---

##### `DefaultSystemAlertCollationWindowInput`<sup>Optional</sup> <a name="DefaultSystemAlertCollationWindowInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSystemAlertCollationWindowInput"></a>

```csharp
public string DefaultSystemAlertCollationWindowInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.providerConfigInput"></a>

```csharp
public IResolvable|LakewatchAlertConfigProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a>

---

##### `SecurityAlertExportConfigInput`<sup>Optional</sup> <a name="SecurityAlertExportConfigInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.securityAlertExportConfigInput"></a>

```csharp
public IResolvable|LakewatchAlertConfigSecurityAlertExportConfig SecurityAlertExportConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a>

---

##### `SystemAlertExportConfigInput`<sup>Optional</sup> <a name="SystemAlertExportConfigInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.systemAlertExportConfigInput"></a>

```csharp
public IResolvable|LakewatchAlertConfigSystemAlertExportConfig SystemAlertExportConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a>

---

##### `DefaultSecurityAlertCollationWindow`<sup>Required</sup> <a name="DefaultSecurityAlertCollationWindow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSecurityAlertCollationWindow"></a>

```csharp
public string DefaultSecurityAlertCollationWindow { get; }
```

- *Type:* string

---

##### `DefaultSystemAlertCollationWindow`<sup>Required</sup> <a name="DefaultSystemAlertCollationWindow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSystemAlertCollationWindow"></a>

```csharp
public string DefaultSystemAlertCollationWindow { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakewatchAlertConfigConfig <a name="LakewatchAlertConfigConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Parent,
    string DefaultSecurityAlertCollationWindow = null,
    string DefaultSystemAlertCollationWindow = null,
    LakewatchAlertConfigProviderConfig ProviderConfig = null,
    LakewatchAlertConfigSecurityAlertExportConfig SecurityAlertExportConfig = null,
    LakewatchAlertConfigSystemAlertExportConfig SystemAlertExportConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#parent LakewatchAlertConfig#parent}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.defaultSecurityAlertCollationWindow">DefaultSecurityAlertCollationWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_security_alert_collation_window LakewatchAlertConfig#default_security_alert_collation_window}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.defaultSystemAlertCollationWindow">DefaultSystemAlertCollationWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_system_alert_collation_window LakewatchAlertConfig#default_system_alert_collation_window}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#provider_config LakewatchAlertConfig#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.securityAlertExportConfig">SecurityAlertExportConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#security_alert_export_config LakewatchAlertConfig#security_alert_export_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.systemAlertExportConfig">SystemAlertExportConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#system_alert_export_config LakewatchAlertConfig#system_alert_export_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#parent LakewatchAlertConfig#parent}.

---

##### `DefaultSecurityAlertCollationWindow`<sup>Optional</sup> <a name="DefaultSecurityAlertCollationWindow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.defaultSecurityAlertCollationWindow"></a>

```csharp
public string DefaultSecurityAlertCollationWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_security_alert_collation_window LakewatchAlertConfig#default_security_alert_collation_window}.

---

##### `DefaultSystemAlertCollationWindow`<sup>Optional</sup> <a name="DefaultSystemAlertCollationWindow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.defaultSystemAlertCollationWindow"></a>

```csharp
public string DefaultSystemAlertCollationWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_system_alert_collation_window LakewatchAlertConfig#default_system_alert_collation_window}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.providerConfig"></a>

```csharp
public LakewatchAlertConfigProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#provider_config LakewatchAlertConfig#provider_config}.

---

##### `SecurityAlertExportConfig`<sup>Optional</sup> <a name="SecurityAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.securityAlertExportConfig"></a>

```csharp
public LakewatchAlertConfigSecurityAlertExportConfig SecurityAlertExportConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#security_alert_export_config LakewatchAlertConfig#security_alert_export_config}.

---

##### `SystemAlertExportConfig`<sup>Optional</sup> <a name="SystemAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.systemAlertExportConfig"></a>

```csharp
public LakewatchAlertConfigSystemAlertExportConfig SystemAlertExportConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#system_alert_export_config LakewatchAlertConfig#system_alert_export_config}.

---

### LakewatchAlertConfigProviderConfig <a name="LakewatchAlertConfigProviderConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}.

---

### LakewatchAlertConfigSecurityAlertExportConfig <a name="LakewatchAlertConfigSecurityAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSecurityAlertExportConfig {
    bool|IResolvable Enabled = null,
    LakewatchAlertConfigSecurityAlertExportConfigJira Jira = null,
    LakewatchAlertConfigSecurityAlertExportConfigServiceNow ServiceNow = null,
    LakewatchAlertConfigSecurityAlertExportConfigSlack Slack = null,
    LakewatchAlertConfigSecurityAlertExportConfigTines Tines = null,
    LakewatchAlertConfigSecurityAlertExportConfigWebhook Webhook = null,
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#enabled LakewatchAlertConfig#enabled}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.jira">Jira</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#jira LakewatchAlertConfig#jira}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#service_now LakewatchAlertConfig#service_now}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#slack LakewatchAlertConfig#slack}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.tines">Tines</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#tines LakewatchAlertConfig#tines}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.webhook">Webhook</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook LakewatchAlertConfig#webhook}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#enabled LakewatchAlertConfig#enabled}.

---

##### `Jira`<sup>Optional</sup> <a name="Jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.jira"></a>

```csharp
public LakewatchAlertConfigSecurityAlertExportConfigJira Jira { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#jira LakewatchAlertConfig#jira}.

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.serviceNow"></a>

```csharp
public LakewatchAlertConfigSecurityAlertExportConfigServiceNow ServiceNow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#service_now LakewatchAlertConfig#service_now}.

---

##### `Slack`<sup>Optional</sup> <a name="Slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.slack"></a>

```csharp
public LakewatchAlertConfigSecurityAlertExportConfigSlack Slack { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#slack LakewatchAlertConfig#slack}.

---

##### `Tines`<sup>Optional</sup> <a name="Tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.tines"></a>

```csharp
public LakewatchAlertConfigSecurityAlertExportConfigTines Tines { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#tines LakewatchAlertConfig#tines}.

---

##### `Webhook`<sup>Optional</sup> <a name="Webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.webhook"></a>

```csharp
public LakewatchAlertConfigSecurityAlertExportConfigWebhook Webhook { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook LakewatchAlertConfig#webhook}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}.

---

### LakewatchAlertConfigSecurityAlertExportConfigJira <a name="LakewatchAlertConfigSecurityAlertExportConfigJira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSecurityAlertExportConfigJira {
    string ApiTokenUcSecret,
    string DefaultIssueType,
    string InstanceUrl,
    string ProjectKey,
    string UserEmail
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.apiTokenUcSecret">ApiTokenUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#api_token_uc_secret LakewatchAlertConfig#api_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.defaultIssueType">DefaultIssueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_issue_type LakewatchAlertConfig#default_issue_type}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.instanceUrl">InstanceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_url LakewatchAlertConfig#instance_url}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.projectKey">ProjectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#project_key LakewatchAlertConfig#project_key}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.userEmail">UserEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#user_email LakewatchAlertConfig#user_email}. |

---

##### `ApiTokenUcSecret`<sup>Required</sup> <a name="ApiTokenUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.apiTokenUcSecret"></a>

```csharp
public string ApiTokenUcSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#api_token_uc_secret LakewatchAlertConfig#api_token_uc_secret}.

---

##### `DefaultIssueType`<sup>Required</sup> <a name="DefaultIssueType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.defaultIssueType"></a>

```csharp
public string DefaultIssueType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_issue_type LakewatchAlertConfig#default_issue_type}.

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.instanceUrl"></a>

```csharp
public string InstanceUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_url LakewatchAlertConfig#instance_url}.

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#project_key LakewatchAlertConfig#project_key}.

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.userEmail"></a>

```csharp
public string UserEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#user_email LakewatchAlertConfig#user_email}.

---

### LakewatchAlertConfigSecurityAlertExportConfigServiceNow <a name="LakewatchAlertConfigSecurityAlertExportConfigServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSecurityAlertExportConfigServiceNow {
    string ClientId,
    string ClientSecretUcSecret,
    string InstanceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_id LakewatchAlertConfig#client_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientSecretUcSecret">ClientSecretUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_secret_uc_secret LakewatchAlertConfig#client_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_id LakewatchAlertConfig#instance_id}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_id LakewatchAlertConfig#client_id}.

---

##### `ClientSecretUcSecret`<sup>Required</sup> <a name="ClientSecretUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientSecretUcSecret"></a>

```csharp
public string ClientSecretUcSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_secret_uc_secret LakewatchAlertConfig#client_secret_uc_secret}.

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_id LakewatchAlertConfig#instance_id}.

---

### LakewatchAlertConfigSecurityAlertExportConfigSlack <a name="LakewatchAlertConfigSecurityAlertExportConfigSlack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSecurityAlertExportConfigSlack {
    string BotTokenUcSecret,
    string Channel
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack.property.botTokenUcSecret">BotTokenUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#bot_token_uc_secret LakewatchAlertConfig#bot_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack.property.channel">Channel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#channel LakewatchAlertConfig#channel}. |

---

##### `BotTokenUcSecret`<sup>Required</sup> <a name="BotTokenUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack.property.botTokenUcSecret"></a>

```csharp
public string BotTokenUcSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#bot_token_uc_secret LakewatchAlertConfig#bot_token_uc_secret}.

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#channel LakewatchAlertConfig#channel}.

---

### LakewatchAlertConfigSecurityAlertExportConfigTines <a name="LakewatchAlertConfigSecurityAlertExportConfigTines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSecurityAlertExportConfigTines {
    string WebhookSecretUcSecret,
    string WebhookUri,
    bool|IResolvable ExportUpdates = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookSecretUcSecret">WebhookSecretUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_secret_uc_secret LakewatchAlertConfig#webhook_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookUri">WebhookUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_uri LakewatchAlertConfig#webhook_uri}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.exportUpdates">ExportUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}. |

---

##### `WebhookSecretUcSecret`<sup>Required</sup> <a name="WebhookSecretUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookSecretUcSecret"></a>

```csharp
public string WebhookSecretUcSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_secret_uc_secret LakewatchAlertConfig#webhook_secret_uc_secret}.

---

##### `WebhookUri`<sup>Required</sup> <a name="WebhookUri" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookUri"></a>

```csharp
public string WebhookUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_uri LakewatchAlertConfig#webhook_uri}.

---

##### `ExportUpdates`<sup>Optional</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.exportUpdates"></a>

```csharp
public bool|IResolvable ExportUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}.

---

### LakewatchAlertConfigSecurityAlertExportConfigWebhook <a name="LakewatchAlertConfigSecurityAlertExportConfigWebhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSecurityAlertExportConfigWebhook {
    bool|IResolvable ExportUpdates = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook.property.exportUpdates">ExportUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#url LakewatchAlertConfig#url}. |

---

##### `ExportUpdates`<sup>Optional</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook.property.exportUpdates"></a>

```csharp
public bool|IResolvable ExportUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#url LakewatchAlertConfig#url}.

---

### LakewatchAlertConfigSystemAlertExportConfig <a name="LakewatchAlertConfigSystemAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSystemAlertExportConfig {
    bool|IResolvable Enabled = null,
    LakewatchAlertConfigSystemAlertExportConfigJira Jira = null,
    LakewatchAlertConfigSystemAlertExportConfigServiceNow ServiceNow = null,
    LakewatchAlertConfigSystemAlertExportConfigSlack Slack = null,
    LakewatchAlertConfigSystemAlertExportConfigTines Tines = null,
    LakewatchAlertConfigSystemAlertExportConfigWebhook Webhook = null,
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#enabled LakewatchAlertConfig#enabled}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.jira">Jira</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#jira LakewatchAlertConfig#jira}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#service_now LakewatchAlertConfig#service_now}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#slack LakewatchAlertConfig#slack}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.tines">Tines</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#tines LakewatchAlertConfig#tines}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.webhook">Webhook</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook LakewatchAlertConfig#webhook}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#enabled LakewatchAlertConfig#enabled}.

---

##### `Jira`<sup>Optional</sup> <a name="Jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.jira"></a>

```csharp
public LakewatchAlertConfigSystemAlertExportConfigJira Jira { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#jira LakewatchAlertConfig#jira}.

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.serviceNow"></a>

```csharp
public LakewatchAlertConfigSystemAlertExportConfigServiceNow ServiceNow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#service_now LakewatchAlertConfig#service_now}.

---

##### `Slack`<sup>Optional</sup> <a name="Slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.slack"></a>

```csharp
public LakewatchAlertConfigSystemAlertExportConfigSlack Slack { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#slack LakewatchAlertConfig#slack}.

---

##### `Tines`<sup>Optional</sup> <a name="Tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.tines"></a>

```csharp
public LakewatchAlertConfigSystemAlertExportConfigTines Tines { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#tines LakewatchAlertConfig#tines}.

---

##### `Webhook`<sup>Optional</sup> <a name="Webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.webhook"></a>

```csharp
public LakewatchAlertConfigSystemAlertExportConfigWebhook Webhook { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook LakewatchAlertConfig#webhook}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}.

---

### LakewatchAlertConfigSystemAlertExportConfigJira <a name="LakewatchAlertConfigSystemAlertExportConfigJira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSystemAlertExportConfigJira {
    string ApiTokenUcSecret,
    string DefaultIssueType,
    string InstanceUrl,
    string ProjectKey,
    string UserEmail
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.apiTokenUcSecret">ApiTokenUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#api_token_uc_secret LakewatchAlertConfig#api_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.defaultIssueType">DefaultIssueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_issue_type LakewatchAlertConfig#default_issue_type}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.instanceUrl">InstanceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_url LakewatchAlertConfig#instance_url}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.projectKey">ProjectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#project_key LakewatchAlertConfig#project_key}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.userEmail">UserEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#user_email LakewatchAlertConfig#user_email}. |

---

##### `ApiTokenUcSecret`<sup>Required</sup> <a name="ApiTokenUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.apiTokenUcSecret"></a>

```csharp
public string ApiTokenUcSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#api_token_uc_secret LakewatchAlertConfig#api_token_uc_secret}.

---

##### `DefaultIssueType`<sup>Required</sup> <a name="DefaultIssueType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.defaultIssueType"></a>

```csharp
public string DefaultIssueType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_issue_type LakewatchAlertConfig#default_issue_type}.

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.instanceUrl"></a>

```csharp
public string InstanceUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_url LakewatchAlertConfig#instance_url}.

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#project_key LakewatchAlertConfig#project_key}.

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.userEmail"></a>

```csharp
public string UserEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#user_email LakewatchAlertConfig#user_email}.

---

### LakewatchAlertConfigSystemAlertExportConfigServiceNow <a name="LakewatchAlertConfigSystemAlertExportConfigServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSystemAlertExportConfigServiceNow {
    string ClientId,
    string ClientSecretUcSecret,
    string InstanceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_id LakewatchAlertConfig#client_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientSecretUcSecret">ClientSecretUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_secret_uc_secret LakewatchAlertConfig#client_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_id LakewatchAlertConfig#instance_id}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_id LakewatchAlertConfig#client_id}.

---

##### `ClientSecretUcSecret`<sup>Required</sup> <a name="ClientSecretUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientSecretUcSecret"></a>

```csharp
public string ClientSecretUcSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_secret_uc_secret LakewatchAlertConfig#client_secret_uc_secret}.

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_id LakewatchAlertConfig#instance_id}.

---

### LakewatchAlertConfigSystemAlertExportConfigSlack <a name="LakewatchAlertConfigSystemAlertExportConfigSlack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSystemAlertExportConfigSlack {
    string BotTokenUcSecret,
    string Channel
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack.property.botTokenUcSecret">BotTokenUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#bot_token_uc_secret LakewatchAlertConfig#bot_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack.property.channel">Channel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#channel LakewatchAlertConfig#channel}. |

---

##### `BotTokenUcSecret`<sup>Required</sup> <a name="BotTokenUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack.property.botTokenUcSecret"></a>

```csharp
public string BotTokenUcSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#bot_token_uc_secret LakewatchAlertConfig#bot_token_uc_secret}.

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#channel LakewatchAlertConfig#channel}.

---

### LakewatchAlertConfigSystemAlertExportConfigTines <a name="LakewatchAlertConfigSystemAlertExportConfigTines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSystemAlertExportConfigTines {
    string WebhookSecretUcSecret,
    string WebhookUri,
    bool|IResolvable ExportUpdates = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.webhookSecretUcSecret">WebhookSecretUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_secret_uc_secret LakewatchAlertConfig#webhook_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.webhookUri">WebhookUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_uri LakewatchAlertConfig#webhook_uri}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.exportUpdates">ExportUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}. |

---

##### `WebhookSecretUcSecret`<sup>Required</sup> <a name="WebhookSecretUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.webhookSecretUcSecret"></a>

```csharp
public string WebhookSecretUcSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_secret_uc_secret LakewatchAlertConfig#webhook_secret_uc_secret}.

---

##### `WebhookUri`<sup>Required</sup> <a name="WebhookUri" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.webhookUri"></a>

```csharp
public string WebhookUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_uri LakewatchAlertConfig#webhook_uri}.

---

##### `ExportUpdates`<sup>Optional</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.exportUpdates"></a>

```csharp
public bool|IResolvable ExportUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}.

---

### LakewatchAlertConfigSystemAlertExportConfigWebhook <a name="LakewatchAlertConfigSystemAlertExportConfigWebhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSystemAlertExportConfigWebhook {
    bool|IResolvable ExportUpdates = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook.property.exportUpdates">ExportUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#url LakewatchAlertConfig#url}. |

---

##### `ExportUpdates`<sup>Optional</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook.property.exportUpdates"></a>

```csharp
public bool|IResolvable ExportUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#url LakewatchAlertConfig#url}.

---

### LakewatchAlertConfigUpdatedBy <a name="LakewatchAlertConfigUpdatedBy" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigUpdatedBy {
    string DisplayName = null,
    string Email = null,
    string Id = null,
    string PrincipalType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#display_name LakewatchAlertConfig#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#email LakewatchAlertConfig#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#id LakewatchAlertConfig#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.principalType">PrincipalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#principal_type LakewatchAlertConfig#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#display_name LakewatchAlertConfig#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#email LakewatchAlertConfig#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#id LakewatchAlertConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.principalType"></a>

```csharp
public string PrincipalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#principal_type LakewatchAlertConfig#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakewatchAlertConfigProviderConfigOutputReference <a name="LakewatchAlertConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchAlertConfigProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput">ApiTokenUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput">DefaultIssueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrlInput">InstanceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmailInput">UserEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecret">ApiTokenUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueType">DefaultIssueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrl">InstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmail">UserEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiTokenUcSecretInput`<sup>Optional</sup> <a name="ApiTokenUcSecretInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput"></a>

```csharp
public string ApiTokenUcSecretInput { get; }
```

- *Type:* string

---

##### `DefaultIssueTypeInput`<sup>Optional</sup> <a name="DefaultIssueTypeInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput"></a>

```csharp
public string DefaultIssueTypeInput { get; }
```

- *Type:* string

---

##### `InstanceUrlInput`<sup>Optional</sup> <a name="InstanceUrlInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrlInput"></a>

```csharp
public string InstanceUrlInput { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `UserEmailInput`<sup>Optional</sup> <a name="UserEmailInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmailInput"></a>

```csharp
public string UserEmailInput { get; }
```

- *Type:* string

---

##### `ApiTokenUcSecret`<sup>Required</sup> <a name="ApiTokenUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecret"></a>

```csharp
public string ApiTokenUcSecret { get; }
```

- *Type:* string

---

##### `DefaultIssueType`<sup>Required</sup> <a name="DefaultIssueType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueType"></a>

```csharp
public string DefaultIssueType { get; }
```

- *Type:* string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrl"></a>

```csharp
public string InstanceUrl { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmail"></a>

```csharp
public string UserEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchAlertConfigSecurityAlertExportConfigJira InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSecurityAlertExportConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira">PutJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow">PutServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack">PutSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines">PutTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook">PutWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetJira">ResetJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetSlack">ResetSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetTines">ResetTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWebhook">ResetWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJira` <a name="PutJira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira"></a>

```csharp
private void PutJira(LakewatchAlertConfigSecurityAlertExportConfigJira Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a>

---

##### `PutServiceNow` <a name="PutServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow"></a>

```csharp
private void PutServiceNow(LakewatchAlertConfigSecurityAlertExportConfigServiceNow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

---

##### `PutSlack` <a name="PutSlack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack"></a>

```csharp
private void PutSlack(LakewatchAlertConfigSecurityAlertExportConfigSlack Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a>

---

##### `PutTines` <a name="PutTines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines"></a>

```csharp
private void PutTines(LakewatchAlertConfigSecurityAlertExportConfigTines Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a>

---

##### `PutWebhook` <a name="PutWebhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook"></a>

```csharp
private void PutWebhook(LakewatchAlertConfigSecurityAlertExportConfigWebhook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetJira` <a name="ResetJira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetJira"></a>

```csharp
private void ResetJira()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetServiceNow"></a>

```csharp
private void ResetServiceNow()
```

##### `ResetSlack` <a name="ResetSlack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetSlack"></a>

```csharp
private void ResetSlack()
```

##### `ResetTines` <a name="ResetTines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetTines"></a>

```csharp
private void ResetTines()
```

##### `ResetWebhook` <a name="ResetWebhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWebhook"></a>

```csharp
private void ResetWebhook()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jira">Jira</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference">LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference">LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference">LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tines">Tines</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference">LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhook">Webhook</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference">LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jiraInput">JiraInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slackInput">SlackInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tinesInput">TinesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhookInput">WebhookInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Jira`<sup>Required</sup> <a name="Jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jira"></a>

```csharp
public LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference Jira { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference">LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNow"></a>

```csharp
public LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference ServiceNow { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference">LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference</a>

---

##### `Slack`<sup>Required</sup> <a name="Slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slack"></a>

```csharp
public LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference Slack { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference">LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference</a>

---

##### `Tines`<sup>Required</sup> <a name="Tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tines"></a>

```csharp
public LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference Tines { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference">LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference</a>

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhook"></a>

```csharp
public LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference Webhook { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference">LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `JiraInput`<sup>Optional</sup> <a name="JiraInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jiraInput"></a>

```csharp
public IResolvable|LakewatchAlertConfigSecurityAlertExportConfigJira JiraInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a>

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNowInput"></a>

```csharp
public IResolvable|LakewatchAlertConfigSecurityAlertExportConfigServiceNow ServiceNowInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

---

##### `SlackInput`<sup>Optional</sup> <a name="SlackInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slackInput"></a>

```csharp
public IResolvable|LakewatchAlertConfigSecurityAlertExportConfigSlack SlackInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a>

---

##### `TinesInput`<sup>Optional</sup> <a name="TinesInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tinesInput"></a>

```csharp
public IResolvable|LakewatchAlertConfigSecurityAlertExportConfigTines TinesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a>

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhookInput"></a>

```csharp
public IResolvable|LakewatchAlertConfigSecurityAlertExportConfigWebhook WebhookInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchAlertConfigSecurityAlertExportConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput">ClientSecretUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret">ClientSecretUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretUcSecretInput`<sup>Optional</sup> <a name="ClientSecretUcSecretInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput"></a>

```csharp
public string ClientSecretUcSecretInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecretUcSecret`<sup>Required</sup> <a name="ClientSecretUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret"></a>

```csharp
public string ClientSecretUcSecret { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchAlertConfigSecurityAlertExportConfigServiceNow InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput">BotTokenUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecret">BotTokenUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BotTokenUcSecretInput`<sup>Optional</sup> <a name="BotTokenUcSecretInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput"></a>

```csharp
public string BotTokenUcSecretInput { get; }
```

- *Type:* string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `BotTokenUcSecret`<sup>Required</sup> <a name="BotTokenUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecret"></a>

```csharp
public string BotTokenUcSecret { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchAlertConfigSecurityAlertExportConfigSlack InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resetExportUpdates">ResetExportUpdates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExportUpdates` <a name="ResetExportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resetExportUpdates"></a>

```csharp
private void ResetExportUpdates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdatesInput">ExportUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput">WebhookSecretUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUriInput">WebhookUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdates">ExportUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret">WebhookSecretUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUri">WebhookUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExportUpdatesInput`<sup>Optional</sup> <a name="ExportUpdatesInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdatesInput"></a>

```csharp
public bool|IResolvable ExportUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WebhookSecretUcSecretInput`<sup>Optional</sup> <a name="WebhookSecretUcSecretInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput"></a>

```csharp
public string WebhookSecretUcSecretInput { get; }
```

- *Type:* string

---

##### `WebhookUriInput`<sup>Optional</sup> <a name="WebhookUriInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUriInput"></a>

```csharp
public string WebhookUriInput { get; }
```

- *Type:* string

---

##### `ExportUpdates`<sup>Required</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdates"></a>

```csharp
public bool|IResolvable ExportUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WebhookSecretUcSecret`<sup>Required</sup> <a name="WebhookSecretUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret"></a>

```csharp
public string WebhookSecretUcSecret { get; }
```

- *Type:* string

---

##### `WebhookUri`<sup>Required</sup> <a name="WebhookUri" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUri"></a>

```csharp
public string WebhookUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchAlertConfigSecurityAlertExportConfigTines InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetExportUpdates">ResetExportUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExportUpdates` <a name="ResetExportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetExportUpdates"></a>

```csharp
private void ResetExportUpdates()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdatesInput">ExportUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdates">ExportUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExportUpdatesInput`<sup>Optional</sup> <a name="ExportUpdatesInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdatesInput"></a>

```csharp
public bool|IResolvable ExportUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `ExportUpdates`<sup>Required</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdates"></a>

```csharp
public bool|IResolvable ExportUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchAlertConfigSecurityAlertExportConfigWebhook InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

---


### LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput">ApiTokenUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput">DefaultIssueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrlInput">InstanceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmailInput">UserEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecret">ApiTokenUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueType">DefaultIssueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrl">InstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmail">UserEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiTokenUcSecretInput`<sup>Optional</sup> <a name="ApiTokenUcSecretInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput"></a>

```csharp
public string ApiTokenUcSecretInput { get; }
```

- *Type:* string

---

##### `DefaultIssueTypeInput`<sup>Optional</sup> <a name="DefaultIssueTypeInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput"></a>

```csharp
public string DefaultIssueTypeInput { get; }
```

- *Type:* string

---

##### `InstanceUrlInput`<sup>Optional</sup> <a name="InstanceUrlInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrlInput"></a>

```csharp
public string InstanceUrlInput { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `UserEmailInput`<sup>Optional</sup> <a name="UserEmailInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmailInput"></a>

```csharp
public string UserEmailInput { get; }
```

- *Type:* string

---

##### `ApiTokenUcSecret`<sup>Required</sup> <a name="ApiTokenUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecret"></a>

```csharp
public string ApiTokenUcSecret { get; }
```

- *Type:* string

---

##### `DefaultIssueType`<sup>Required</sup> <a name="DefaultIssueType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueType"></a>

```csharp
public string DefaultIssueType { get; }
```

- *Type:* string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrl"></a>

```csharp
public string InstanceUrl { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmail"></a>

```csharp
public string UserEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchAlertConfigSystemAlertExportConfigJira InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a>

---


### LakewatchAlertConfigSystemAlertExportConfigOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSystemAlertExportConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira">PutJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow">PutServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack">PutSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines">PutTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook">PutWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetJira">ResetJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetSlack">ResetSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetTines">ResetTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWebhook">ResetWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJira` <a name="PutJira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira"></a>

```csharp
private void PutJira(LakewatchAlertConfigSystemAlertExportConfigJira Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a>

---

##### `PutServiceNow` <a name="PutServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow"></a>

```csharp
private void PutServiceNow(LakewatchAlertConfigSystemAlertExportConfigServiceNow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

---

##### `PutSlack` <a name="PutSlack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack"></a>

```csharp
private void PutSlack(LakewatchAlertConfigSystemAlertExportConfigSlack Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a>

---

##### `PutTines` <a name="PutTines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines"></a>

```csharp
private void PutTines(LakewatchAlertConfigSystemAlertExportConfigTines Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a>

---

##### `PutWebhook` <a name="PutWebhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook"></a>

```csharp
private void PutWebhook(LakewatchAlertConfigSystemAlertExportConfigWebhook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetJira` <a name="ResetJira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetJira"></a>

```csharp
private void ResetJira()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetServiceNow"></a>

```csharp
private void ResetServiceNow()
```

##### `ResetSlack` <a name="ResetSlack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetSlack"></a>

```csharp
private void ResetSlack()
```

##### `ResetTines` <a name="ResetTines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetTines"></a>

```csharp
private void ResetTines()
```

##### `ResetWebhook` <a name="ResetWebhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWebhook"></a>

```csharp
private void ResetWebhook()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jira">Jira</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference">LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference">LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference">LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tines">Tines</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference">LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhook">Webhook</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference">LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jiraInput">JiraInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slackInput">SlackInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tinesInput">TinesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhookInput">WebhookInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Jira`<sup>Required</sup> <a name="Jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jira"></a>

```csharp
public LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference Jira { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference">LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNow"></a>

```csharp
public LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference ServiceNow { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference">LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference</a>

---

##### `Slack`<sup>Required</sup> <a name="Slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slack"></a>

```csharp
public LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference Slack { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference">LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference</a>

---

##### `Tines`<sup>Required</sup> <a name="Tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tines"></a>

```csharp
public LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference Tines { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference">LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference</a>

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhook"></a>

```csharp
public LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference Webhook { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference">LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `JiraInput`<sup>Optional</sup> <a name="JiraInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jiraInput"></a>

```csharp
public IResolvable|LakewatchAlertConfigSystemAlertExportConfigJira JiraInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a>

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNowInput"></a>

```csharp
public IResolvable|LakewatchAlertConfigSystemAlertExportConfigServiceNow ServiceNowInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

---

##### `SlackInput`<sup>Optional</sup> <a name="SlackInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slackInput"></a>

```csharp
public IResolvable|LakewatchAlertConfigSystemAlertExportConfigSlack SlackInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a>

---

##### `TinesInput`<sup>Optional</sup> <a name="TinesInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tinesInput"></a>

```csharp
public IResolvable|LakewatchAlertConfigSystemAlertExportConfigTines TinesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a>

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhookInput"></a>

```csharp
public IResolvable|LakewatchAlertConfigSystemAlertExportConfigWebhook WebhookInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a>

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchAlertConfigSystemAlertExportConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a>

---


### LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput">ClientSecretUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret">ClientSecretUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretUcSecretInput`<sup>Optional</sup> <a name="ClientSecretUcSecretInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput"></a>

```csharp
public string ClientSecretUcSecretInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecretUcSecret`<sup>Required</sup> <a name="ClientSecretUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret"></a>

```csharp
public string ClientSecretUcSecret { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchAlertConfigSystemAlertExportConfigServiceNow InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

---


### LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput">BotTokenUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecret">BotTokenUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BotTokenUcSecretInput`<sup>Optional</sup> <a name="BotTokenUcSecretInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput"></a>

```csharp
public string BotTokenUcSecretInput { get; }
```

- *Type:* string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `BotTokenUcSecret`<sup>Required</sup> <a name="BotTokenUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecret"></a>

```csharp
public string BotTokenUcSecret { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchAlertConfigSystemAlertExportConfigSlack InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a>

---


### LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resetExportUpdates">ResetExportUpdates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExportUpdates` <a name="ResetExportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resetExportUpdates"></a>

```csharp
private void ResetExportUpdates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdatesInput">ExportUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput">WebhookSecretUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUriInput">WebhookUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdates">ExportUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret">WebhookSecretUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUri">WebhookUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExportUpdatesInput`<sup>Optional</sup> <a name="ExportUpdatesInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdatesInput"></a>

```csharp
public bool|IResolvable ExportUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WebhookSecretUcSecretInput`<sup>Optional</sup> <a name="WebhookSecretUcSecretInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput"></a>

```csharp
public string WebhookSecretUcSecretInput { get; }
```

- *Type:* string

---

##### `WebhookUriInput`<sup>Optional</sup> <a name="WebhookUriInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUriInput"></a>

```csharp
public string WebhookUriInput { get; }
```

- *Type:* string

---

##### `ExportUpdates`<sup>Required</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdates"></a>

```csharp
public bool|IResolvable ExportUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WebhookSecretUcSecret`<sup>Required</sup> <a name="WebhookSecretUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret"></a>

```csharp
public string WebhookSecretUcSecret { get; }
```

- *Type:* string

---

##### `WebhookUri`<sup>Required</sup> <a name="WebhookUri" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUri"></a>

```csharp
public string WebhookUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchAlertConfigSystemAlertExportConfigTines InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a>

---


### LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetExportUpdates">ResetExportUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExportUpdates` <a name="ResetExportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetExportUpdates"></a>

```csharp
private void ResetExportUpdates()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdatesInput">ExportUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdates">ExportUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExportUpdatesInput`<sup>Optional</sup> <a name="ExportUpdatesInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdatesInput"></a>

```csharp
public bool|IResolvable ExportUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `ExportUpdates`<sup>Required</sup> <a name="ExportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdates"></a>

```csharp
public bool|IResolvable ExportUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchAlertConfigSystemAlertExportConfigWebhook InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a>

---


### LakewatchAlertConfigUpdatedByOutputReference <a name="LakewatchAlertConfigUpdatedByOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchAlertConfigUpdatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetPrincipalType"></a>

```csharp
private void ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy">LakewatchAlertConfigUpdatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.principalTypeInput"></a>

```csharp
public string PrincipalTypeInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.internalValue"></a>

```csharp
public LakewatchAlertConfigUpdatedBy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy">LakewatchAlertConfigUpdatedBy</a>

---



