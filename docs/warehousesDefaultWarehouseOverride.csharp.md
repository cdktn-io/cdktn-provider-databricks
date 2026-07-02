# `warehousesDefaultWarehouseOverride` Submodule <a name="`warehousesDefaultWarehouseOverride` Submodule" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WarehousesDefaultWarehouseOverride <a name="WarehousesDefaultWarehouseOverride" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/warehouses_default_warehouse_override databricks_warehouses_default_warehouse_override}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new WarehousesDefaultWarehouseOverride(Construct Scope, string Id, WarehousesDefaultWarehouseOverrideConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig">WarehousesDefaultWarehouseOverrideConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig">WarehousesDefaultWarehouseOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.putProviderConfig"></a>

```csharp
private void PutProviderConfig(WarehousesDefaultWarehouseOverrideProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetWarehouseId"></a>

```csharp
private void ResetWarehouseId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WarehousesDefaultWarehouseOverride resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

WarehousesDefaultWarehouseOverride.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

WarehousesDefaultWarehouseOverride.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

WarehousesDefaultWarehouseOverride.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

WarehousesDefaultWarehouseOverride.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WarehousesDefaultWarehouseOverride resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WarehousesDefaultWarehouseOverride to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WarehousesDefaultWarehouseOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/warehouses_default_warehouse_override#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WarehousesDefaultWarehouseOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference">WarehousesDefaultWarehouseOverrideProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideIdInput">DefaultWarehouseOverrideIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideId">DefaultWarehouseOverrideId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.warehouseId">WarehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.providerConfig"></a>

```csharp
public WarehousesDefaultWarehouseOverrideProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference">WarehousesDefaultWarehouseOverrideProviderConfigOutputReference</a>

---

##### `DefaultWarehouseOverrideIdInput`<sup>Optional</sup> <a name="DefaultWarehouseOverrideIdInput" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideIdInput"></a>

```csharp
public string DefaultWarehouseOverrideIdInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.providerConfigInput"></a>

```csharp
public IResolvable|WarehousesDefaultWarehouseOverrideProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.warehouseIdInput"></a>

```csharp
public string WarehouseIdInput { get; }
```

- *Type:* string

---

##### `DefaultWarehouseOverrideId`<sup>Required</sup> <a name="DefaultWarehouseOverrideId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideId"></a>

```csharp
public string DefaultWarehouseOverrideId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.warehouseId"></a>

```csharp
public string WarehouseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WarehousesDefaultWarehouseOverrideConfig <a name="WarehousesDefaultWarehouseOverrideConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new WarehousesDefaultWarehouseOverrideConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DefaultWarehouseOverrideId,
    string Type,
    WarehousesDefaultWarehouseOverrideProviderConfig ProviderConfig = null,
    string WarehouseId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.defaultWarehouseOverrideId">DefaultWarehouseOverrideId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/warehouses_default_warehouse_override#default_warehouse_override_id WarehousesDefaultWarehouseOverride#default_warehouse_override_id}. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/warehouses_default_warehouse_override#type WarehousesDefaultWarehouseOverride#type}. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/warehouses_default_warehouse_override#provider_config WarehousesDefaultWarehouseOverride#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.warehouseId">WarehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/warehouses_default_warehouse_override#warehouse_id WarehousesDefaultWarehouseOverride#warehouse_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DefaultWarehouseOverrideId`<sup>Required</sup> <a name="DefaultWarehouseOverrideId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.defaultWarehouseOverrideId"></a>

```csharp
public string DefaultWarehouseOverrideId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/warehouses_default_warehouse_override#default_warehouse_override_id WarehousesDefaultWarehouseOverride#default_warehouse_override_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/warehouses_default_warehouse_override#type WarehousesDefaultWarehouseOverride#type}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.providerConfig"></a>

```csharp
public WarehousesDefaultWarehouseOverrideProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/warehouses_default_warehouse_override#provider_config WarehousesDefaultWarehouseOverride#provider_config}.

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.warehouseId"></a>

```csharp
public string WarehouseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/warehouses_default_warehouse_override#warehouse_id WarehousesDefaultWarehouseOverride#warehouse_id}.

---

### WarehousesDefaultWarehouseOverrideProviderConfig <a name="WarehousesDefaultWarehouseOverrideProviderConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new WarehousesDefaultWarehouseOverrideProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/warehouses_default_warehouse_override#workspace_id WarehousesDefaultWarehouseOverride#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/warehouses_default_warehouse_override#workspace_id WarehousesDefaultWarehouseOverride#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### WarehousesDefaultWarehouseOverrideProviderConfigOutputReference <a name="WarehousesDefaultWarehouseOverrideProviderConfigOutputReference" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new WarehousesDefaultWarehouseOverrideProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WarehousesDefaultWarehouseOverrideProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a>

---



