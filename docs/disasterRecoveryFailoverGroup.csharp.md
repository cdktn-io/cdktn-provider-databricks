# `disasterRecoveryFailoverGroup` Submodule <a name="`disasterRecoveryFailoverGroup` Submodule" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisasterRecoveryFailoverGroup <a name="DisasterRecoveryFailoverGroup" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group databricks_disaster_recovery_failover_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisasterRecoveryFailoverGroup(Construct Scope, string Id, DisasterRecoveryFailoverGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig">DisasterRecoveryFailoverGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig">DisasterRecoveryFailoverGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putUnityCatalogAssets">PutUnityCatalogAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putWorkspaceSets">PutWorkspaceSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.resetUnityCatalogAssets">ResetUnityCatalogAssets</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutUnityCatalogAssets` <a name="PutUnityCatalogAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putUnityCatalogAssets"></a>

```csharp
private void PutUnityCatalogAssets(DisasterRecoveryFailoverGroupUnityCatalogAssets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putUnityCatalogAssets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets">DisasterRecoveryFailoverGroupUnityCatalogAssets</a>

---

##### `PutWorkspaceSets` <a name="PutWorkspaceSets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putWorkspaceSets"></a>

```csharp
private void PutWorkspaceSets(IResolvable|DisasterRecoveryFailoverGroupWorkspaceSets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putWorkspaceSets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a>[]

---

##### `ResetUnityCatalogAssets` <a name="ResetUnityCatalogAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.resetUnityCatalogAssets"></a>

```csharp
private void ResetUnityCatalogAssets()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DisasterRecoveryFailoverGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DisasterRecoveryFailoverGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DisasterRecoveryFailoverGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DisasterRecoveryFailoverGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DisasterRecoveryFailoverGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DisasterRecoveryFailoverGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DisasterRecoveryFailoverGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DisasterRecoveryFailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DisasterRecoveryFailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.effectivePrimaryRegion">EffectivePrimaryRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.replicationPoint">ReplicationPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.unityCatalogAssets">UnityCatalogAssets</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference">DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.workspaceSets">WorkspaceSets</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList">DisasterRecoveryFailoverGroupWorkspaceSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.failoverGroupIdInput">FailoverGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.initialPrimaryRegionInput">InitialPrimaryRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.unityCatalogAssetsInput">UnityCatalogAssetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets">DisasterRecoveryFailoverGroupUnityCatalogAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.workspaceSetsInput">WorkspaceSetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.failoverGroupId">FailoverGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.initialPrimaryRegion">InitialPrimaryRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectivePrimaryRegion`<sup>Required</sup> <a name="EffectivePrimaryRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.effectivePrimaryRegion"></a>

```csharp
public string EffectivePrimaryRegion { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReplicationPoint`<sup>Required</sup> <a name="ReplicationPoint" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.replicationPoint"></a>

```csharp
public string ReplicationPoint { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `UnityCatalogAssets`<sup>Required</sup> <a name="UnityCatalogAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.unityCatalogAssets"></a>

```csharp
public DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference UnityCatalogAssets { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference">DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WorkspaceSets`<sup>Required</sup> <a name="WorkspaceSets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.workspaceSets"></a>

```csharp
public DisasterRecoveryFailoverGroupWorkspaceSetsList WorkspaceSets { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList">DisasterRecoveryFailoverGroupWorkspaceSetsList</a>

---

##### `FailoverGroupIdInput`<sup>Optional</sup> <a name="FailoverGroupIdInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.failoverGroupIdInput"></a>

```csharp
public string FailoverGroupIdInput { get; }
```

- *Type:* string

---

##### `InitialPrimaryRegionInput`<sup>Optional</sup> <a name="InitialPrimaryRegionInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.initialPrimaryRegionInput"></a>

```csharp
public string InitialPrimaryRegionInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `UnityCatalogAssetsInput`<sup>Optional</sup> <a name="UnityCatalogAssetsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.unityCatalogAssetsInput"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssets UnityCatalogAssetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets">DisasterRecoveryFailoverGroupUnityCatalogAssets</a>

---

##### `WorkspaceSetsInput`<sup>Optional</sup> <a name="WorkspaceSetsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.workspaceSetsInput"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupWorkspaceSets[] WorkspaceSetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a>[]

---

##### `FailoverGroupId`<sup>Required</sup> <a name="FailoverGroupId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.failoverGroupId"></a>

```csharp
public string FailoverGroupId { get; }
```

- *Type:* string

---

##### `InitialPrimaryRegion`<sup>Required</sup> <a name="InitialPrimaryRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.initialPrimaryRegion"></a>

```csharp
public string InitialPrimaryRegion { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DisasterRecoveryFailoverGroupConfig <a name="DisasterRecoveryFailoverGroupConfig" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisasterRecoveryFailoverGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FailoverGroupId,
    string InitialPrimaryRegion,
    string Parent,
    string[] Regions,
    IResolvable|DisasterRecoveryFailoverGroupWorkspaceSets[] WorkspaceSets,
    DisasterRecoveryFailoverGroupUnityCatalogAssets UnityCatalogAssets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.failoverGroupId">FailoverGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#failover_group_id DisasterRecoveryFailoverGroup#failover_group_id}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.initialPrimaryRegion">InitialPrimaryRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#initial_primary_region DisasterRecoveryFailoverGroup#initial_primary_region}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#parent DisasterRecoveryFailoverGroup#parent}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.regions">Regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#regions DisasterRecoveryFailoverGroup#regions}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.workspaceSets">WorkspaceSets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#workspace_sets DisasterRecoveryFailoverGroup#workspace_sets}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.unityCatalogAssets">UnityCatalogAssets</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets">DisasterRecoveryFailoverGroupUnityCatalogAssets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#unity_catalog_assets DisasterRecoveryFailoverGroup#unity_catalog_assets}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FailoverGroupId`<sup>Required</sup> <a name="FailoverGroupId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.failoverGroupId"></a>

```csharp
public string FailoverGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#failover_group_id DisasterRecoveryFailoverGroup#failover_group_id}.

---

##### `InitialPrimaryRegion`<sup>Required</sup> <a name="InitialPrimaryRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.initialPrimaryRegion"></a>

```csharp
public string InitialPrimaryRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#initial_primary_region DisasterRecoveryFailoverGroup#initial_primary_region}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#parent DisasterRecoveryFailoverGroup#parent}.

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#regions DisasterRecoveryFailoverGroup#regions}.

---

##### `WorkspaceSets`<sup>Required</sup> <a name="WorkspaceSets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.workspaceSets"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupWorkspaceSets[] WorkspaceSets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#workspace_sets DisasterRecoveryFailoverGroup#workspace_sets}.

---

##### `UnityCatalogAssets`<sup>Optional</sup> <a name="UnityCatalogAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.unityCatalogAssets"></a>

```csharp
public DisasterRecoveryFailoverGroupUnityCatalogAssets UnityCatalogAssets { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets">DisasterRecoveryFailoverGroupUnityCatalogAssets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#unity_catalog_assets DisasterRecoveryFailoverGroup#unity_catalog_assets}.

---

### DisasterRecoveryFailoverGroupUnityCatalogAssets <a name="DisasterRecoveryFailoverGroupUnityCatalogAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisasterRecoveryFailoverGroupUnityCatalogAssets {
    IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs[] Catalogs,
    string DataReplicationWorkspaceSet,
    IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings[] LocationMappings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.catalogs">Catalogs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#catalogs DisasterRecoveryFailoverGroup#catalogs}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.dataReplicationWorkspaceSet">DataReplicationWorkspaceSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#data_replication_workspace_set DisasterRecoveryFailoverGroup#data_replication_workspace_set}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.locationMappings">LocationMappings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#location_mappings DisasterRecoveryFailoverGroup#location_mappings}. |

---

##### `Catalogs`<sup>Required</sup> <a name="Catalogs" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.catalogs"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs[] Catalogs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#catalogs DisasterRecoveryFailoverGroup#catalogs}.

---

##### `DataReplicationWorkspaceSet`<sup>Required</sup> <a name="DataReplicationWorkspaceSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.dataReplicationWorkspaceSet"></a>

```csharp
public string DataReplicationWorkspaceSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#data_replication_workspace_set DisasterRecoveryFailoverGroup#data_replication_workspace_set}.

---

##### `LocationMappings`<sup>Optional</sup> <a name="LocationMappings" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.locationMappings"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings[] LocationMappings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#location_mappings DisasterRecoveryFailoverGroup#location_mappings}.

---

### DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}.

---

### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings {
    string Name,
    IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion[] UriByRegion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.uriByRegion">UriByRegion</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#uri_by_region DisasterRecoveryFailoverGroup#uri_by_region}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}.

---

##### `UriByRegion`<sup>Required</sup> <a name="UriByRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.uriByRegion"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion[] UriByRegion { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#uri_by_region DisasterRecoveryFailoverGroup#uri_by_region}.

---

### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion {
    string Region,
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#region DisasterRecoveryFailoverGroup#region}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#uri DisasterRecoveryFailoverGroup#uri}. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#region DisasterRecoveryFailoverGroup#region}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#uri DisasterRecoveryFailoverGroup#uri}.

---

### DisasterRecoveryFailoverGroupWorkspaceSets <a name="DisasterRecoveryFailoverGroupWorkspaceSets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisasterRecoveryFailoverGroupWorkspaceSets {
    string Name,
    string[] WorkspaceIds,
    bool|IResolvable ReplicateWorkspaceAssets = null,
    string[] StableUrlNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.workspaceIds">WorkspaceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#workspace_ids DisasterRecoveryFailoverGroup#workspace_ids}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.replicateWorkspaceAssets">ReplicateWorkspaceAssets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#replicate_workspace_assets DisasterRecoveryFailoverGroup#replicate_workspace_assets}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.stableUrlNames">StableUrlNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#stable_url_names DisasterRecoveryFailoverGroup#stable_url_names}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}.

---

##### `WorkspaceIds`<sup>Required</sup> <a name="WorkspaceIds" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.workspaceIds"></a>

```csharp
public string[] WorkspaceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#workspace_ids DisasterRecoveryFailoverGroup#workspace_ids}.

---

##### `ReplicateWorkspaceAssets`<sup>Optional</sup> <a name="ReplicateWorkspaceAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.replicateWorkspaceAssets"></a>

```csharp
public bool|IResolvable ReplicateWorkspaceAssets { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#replicate_workspace_assets DisasterRecoveryFailoverGroup#replicate_workspace_assets}.

---

##### `StableUrlNames`<sup>Optional</sup> <a name="StableUrlNames" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.stableUrlNames"></a>

```csharp
public string[] StableUrlNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disaster_recovery_failover_group#stable_url_names DisasterRecoveryFailoverGroup#stable_url_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.get"></a>

```csharp
private DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.internalValue"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.get"></a>

```csharp
private DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.internalValue"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion">PutUriByRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUriByRegion` <a name="PutUriByRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion"></a>

```csharp
private void PutUriByRegion(IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegion">UriByRegion</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegionInput">UriByRegionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriByRegion`<sup>Required</sup> <a name="UriByRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegion"></a>

```csharp
public DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList UriByRegion { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `UriByRegionInput`<sup>Optional</sup> <a name="UriByRegionInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegionInput"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion[] UriByRegionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.get"></a>

```csharp
private DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.internalValue"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>[]

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putCatalogs">PutCatalogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putLocationMappings">PutLocationMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resetLocationMappings">ResetLocationMappings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCatalogs` <a name="PutCatalogs" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putCatalogs"></a>

```csharp
private void PutCatalogs(IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putCatalogs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]

---

##### `PutLocationMappings` <a name="PutLocationMappings" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putLocationMappings"></a>

```csharp
private void PutLocationMappings(IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putLocationMappings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]

---

##### `ResetLocationMappings` <a name="ResetLocationMappings" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resetLocationMappings"></a>

```csharp
private void ResetLocationMappings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogs">Catalogs</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappings">LocationMappings</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogsInput">CatalogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSetInput">DataReplicationWorkspaceSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappingsInput">LocationMappingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSet">DataReplicationWorkspaceSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets">DisasterRecoveryFailoverGroupUnityCatalogAssets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Catalogs`<sup>Required</sup> <a name="Catalogs" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogs"></a>

```csharp
public DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList Catalogs { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList</a>

---

##### `LocationMappings`<sup>Required</sup> <a name="LocationMappings" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappings"></a>

```csharp
public DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList LocationMappings { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList</a>

---

##### `CatalogsInput`<sup>Optional</sup> <a name="CatalogsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogsInput"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs[] CatalogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>[]

---

##### `DataReplicationWorkspaceSetInput`<sup>Optional</sup> <a name="DataReplicationWorkspaceSetInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSetInput"></a>

```csharp
public string DataReplicationWorkspaceSetInput { get; }
```

- *Type:* string

---

##### `LocationMappingsInput`<sup>Optional</sup> <a name="LocationMappingsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappingsInput"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings[] LocationMappingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>[]

---

##### `DataReplicationWorkspaceSet`<sup>Required</sup> <a name="DataReplicationWorkspaceSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSet"></a>

```csharp
public string DataReplicationWorkspaceSet { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupUnityCatalogAssets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets">DisasterRecoveryFailoverGroupUnityCatalogAssets</a>

---


### DisasterRecoveryFailoverGroupWorkspaceSetsList <a name="DisasterRecoveryFailoverGroupWorkspaceSetsList" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisasterRecoveryFailoverGroupWorkspaceSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.get"></a>

```csharp
private DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.internalValue"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupWorkspaceSets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a>[]

---


### DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference <a name="DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resetReplicateWorkspaceAssets">ResetReplicateWorkspaceAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resetStableUrlNames">ResetStableUrlNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplicateWorkspaceAssets` <a name="ResetReplicateWorkspaceAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resetReplicateWorkspaceAssets"></a>

```csharp
private void ResetReplicateWorkspaceAssets()
```

##### `ResetStableUrlNames` <a name="ResetStableUrlNames" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resetStableUrlNames"></a>

```csharp
private void ResetStableUrlNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssetsInput">ReplicateWorkspaceAssetsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNamesInput">StableUrlNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIdsInput">WorkspaceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssets">ReplicateWorkspaceAssets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNames">StableUrlNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIds">WorkspaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReplicateWorkspaceAssetsInput`<sup>Optional</sup> <a name="ReplicateWorkspaceAssetsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssetsInput"></a>

```csharp
public bool|IResolvable ReplicateWorkspaceAssetsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StableUrlNamesInput`<sup>Optional</sup> <a name="StableUrlNamesInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNamesInput"></a>

```csharp
public string[] StableUrlNamesInput { get; }
```

- *Type:* string[]

---

##### `WorkspaceIdsInput`<sup>Optional</sup> <a name="WorkspaceIdsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIdsInput"></a>

```csharp
public string[] WorkspaceIdsInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReplicateWorkspaceAssets`<sup>Required</sup> <a name="ReplicateWorkspaceAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssets"></a>

```csharp
public bool|IResolvable ReplicateWorkspaceAssets { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StableUrlNames`<sup>Required</sup> <a name="StableUrlNames" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNames"></a>

```csharp
public string[] StableUrlNames { get; }
```

- *Type:* string[]

---

##### `WorkspaceIds`<sup>Required</sup> <a name="WorkspaceIds" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIds"></a>

```csharp
public string[] WorkspaceIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DisasterRecoveryFailoverGroupWorkspaceSets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets">DisasterRecoveryFailoverGroupWorkspaceSets</a>

---



