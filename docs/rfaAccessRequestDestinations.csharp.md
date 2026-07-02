# `rfaAccessRequestDestinations` Submodule <a name="`rfaAccessRequestDestinations` Submodule" id="@cdktn/provider-databricks.rfaAccessRequestDestinations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RfaAccessRequestDestinations <a name="RfaAccessRequestDestinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations databricks_rfa_access_request_destinations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new RfaAccessRequestDestinations(Construct Scope, string Id, RfaAccessRequestDestinationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig">RfaAccessRequestDestinationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig">RfaAccessRequestDestinationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putSecurable">PutSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putDestinations"></a>

```csharp
private void PutDestinations(IResolvable|RfaAccessRequestDestinationsDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putProviderConfig"></a>

```csharp
private void PutProviderConfig(RfaAccessRequestDestinationsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a>

---

##### `PutSecurable` <a name="PutSecurable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putSecurable"></a>

```csharp
private void PutSecurable(RfaAccessRequestDestinationsSecurable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.putSecurable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a>

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetDestinations"></a>

```csharp
private void ResetDestinations()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RfaAccessRequestDestinations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

RfaAccessRequestDestinations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

RfaAccessRequestDestinations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

RfaAccessRequestDestinations.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

RfaAccessRequestDestinations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RfaAccessRequestDestinations resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RfaAccessRequestDestinations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RfaAccessRequestDestinations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RfaAccessRequestDestinations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.areAnyDestinationsHidden">AreAnyDestinationsHidden</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList">RfaAccessRequestDestinationsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinationSourceSecurable">DestinationSourceSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference">RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference">RfaAccessRequestDestinationsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securable">Securable</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference">RfaAccessRequestDestinationsSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securableType">SecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinationsInput">DestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securableInput">SecurableInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AreAnyDestinationsHidden`<sup>Required</sup> <a name="AreAnyDestinationsHidden" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.areAnyDestinationsHidden"></a>

```csharp
public IResolvable AreAnyDestinationsHidden { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinations"></a>

```csharp
public RfaAccessRequestDestinationsDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList">RfaAccessRequestDestinationsDestinationsList</a>

---

##### `DestinationSourceSecurable`<sup>Required</sup> <a name="DestinationSourceSecurable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinationSourceSecurable"></a>

```csharp
public RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference DestinationSourceSecurable { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference">RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference</a>

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.providerConfig"></a>

```csharp
public RfaAccessRequestDestinationsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference">RfaAccessRequestDestinationsProviderConfigOutputReference</a>

---

##### `Securable`<sup>Required</sup> <a name="Securable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securable"></a>

```csharp
public RfaAccessRequestDestinationsSecurableOutputReference Securable { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference">RfaAccessRequestDestinationsSecurableOutputReference</a>

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securableType"></a>

```csharp
public string SecurableType { get; }
```

- *Type:* string

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.destinationsInput"></a>

```csharp
public IResolvable|RfaAccessRequestDestinationsDestinations[] DestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.providerConfigInput"></a>

```csharp
public IResolvable|RfaAccessRequestDestinationsProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a>

---

##### `SecurableInput`<sup>Optional</sup> <a name="SecurableInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.securableInput"></a>

```csharp
public IResolvable|RfaAccessRequestDestinationsSecurable SecurableInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RfaAccessRequestDestinationsConfig <a name="RfaAccessRequestDestinationsConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new RfaAccessRequestDestinationsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    RfaAccessRequestDestinationsSecurable Securable,
    IResolvable|RfaAccessRequestDestinationsDestinations[] Destinations = null,
    RfaAccessRequestDestinationsProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.securable">Securable</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#securable RfaAccessRequestDestinations#securable}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.destinations">Destinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#destinations RfaAccessRequestDestinations#destinations}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#provider_config RfaAccessRequestDestinations#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Securable`<sup>Required</sup> <a name="Securable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.securable"></a>

```csharp
public RfaAccessRequestDestinationsSecurable Securable { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#securable RfaAccessRequestDestinations#securable}.

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.destinations"></a>

```csharp
public IResolvable|RfaAccessRequestDestinationsDestinations[] Destinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#destinations RfaAccessRequestDestinations#destinations}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsConfig.property.providerConfig"></a>

```csharp
public RfaAccessRequestDestinationsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#provider_config RfaAccessRequestDestinations#provider_config}.

---

### RfaAccessRequestDestinationsDestinations <a name="RfaAccessRequestDestinationsDestinations" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new RfaAccessRequestDestinationsDestinations {
    string DestinationId = null,
    string DestinationType = null,
    string SpecialDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.destinationId">DestinationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#destination_id RfaAccessRequestDestinations#destination_id}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.destinationType">DestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#destination_type RfaAccessRequestDestinations#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.specialDestination">SpecialDestination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#special_destination RfaAccessRequestDestinations#special_destination}. |

---

##### `DestinationId`<sup>Optional</sup> <a name="DestinationId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.destinationId"></a>

```csharp
public string DestinationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#destination_id RfaAccessRequestDestinations#destination_id}.

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.destinationType"></a>

```csharp
public string DestinationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#destination_type RfaAccessRequestDestinations#destination_type}.

---

##### `SpecialDestination`<sup>Optional</sup> <a name="SpecialDestination" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations.property.specialDestination"></a>

```csharp
public string SpecialDestination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#special_destination RfaAccessRequestDestinations#special_destination}.

---

### RfaAccessRequestDestinationsDestinationSourceSecurable <a name="RfaAccessRequestDestinationsDestinationSourceSecurable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new RfaAccessRequestDestinationsDestinationSourceSecurable {
    string FullName = null,
    string ProviderShare = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.fullName">FullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#full_name RfaAccessRequestDestinations#full_name}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.providerShare">ProviderShare</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#provider_share RfaAccessRequestDestinations#provider_share}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#type RfaAccessRequestDestinations#type}. |

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.fullName"></a>

```csharp
public string FullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#full_name RfaAccessRequestDestinations#full_name}.

---

##### `ProviderShare`<sup>Optional</sup> <a name="ProviderShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.providerShare"></a>

```csharp
public string ProviderShare { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#provider_share RfaAccessRequestDestinations#provider_share}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#type RfaAccessRequestDestinations#type}.

---

### RfaAccessRequestDestinationsProviderConfig <a name="RfaAccessRequestDestinationsProviderConfig" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new RfaAccessRequestDestinationsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#workspace_id RfaAccessRequestDestinations#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#workspace_id RfaAccessRequestDestinations#workspace_id}.

---

### RfaAccessRequestDestinationsSecurable <a name="RfaAccessRequestDestinationsSecurable" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new RfaAccessRequestDestinationsSecurable {
    string FullName = null,
    string ProviderShare = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.fullName">FullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#full_name RfaAccessRequestDestinations#full_name}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.providerShare">ProviderShare</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#provider_share RfaAccessRequestDestinations#provider_share}. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#type RfaAccessRequestDestinations#type}. |

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.fullName"></a>

```csharp
public string FullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#full_name RfaAccessRequestDestinations#full_name}.

---

##### `ProviderShare`<sup>Optional</sup> <a name="ProviderShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.providerShare"></a>

```csharp
public string ProviderShare { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#provider_share RfaAccessRequestDestinations#provider_share}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/rfa_access_request_destinations#type RfaAccessRequestDestinations#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### RfaAccessRequestDestinationsDestinationsList <a name="RfaAccessRequestDestinationsDestinationsList" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new RfaAccessRequestDestinationsDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.get"></a>

```csharp
private RfaAccessRequestDestinationsDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|RfaAccessRequestDestinationsDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>[]

---


### RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference <a name="RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetProviderShare">ResetProviderShare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFullName` <a name="ResetFullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetFullName"></a>

```csharp
private void ResetFullName()
```

##### `ResetProviderShare` <a name="ResetProviderShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetProviderShare"></a>

```csharp
private void ResetProviderShare()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.providerShareInput">ProviderShareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.providerShare">ProviderShare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable">RfaAccessRequestDestinationsDestinationSourceSecurable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fullNameInput"></a>

```csharp
public string FullNameInput { get; }
```

- *Type:* string

---

##### `ProviderShareInput`<sup>Optional</sup> <a name="ProviderShareInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.providerShareInput"></a>

```csharp
public string ProviderShareInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `ProviderShare`<sup>Required</sup> <a name="ProviderShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.providerShare"></a>

```csharp
public string ProviderShare { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.internalValue"></a>

```csharp
public RfaAccessRequestDestinationsDestinationSourceSecurable InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationSourceSecurable">RfaAccessRequestDestinationsDestinationSourceSecurable</a>

---


### RfaAccessRequestDestinationsDestinationsOutputReference <a name="RfaAccessRequestDestinationsDestinationsOutputReference" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new RfaAccessRequestDestinationsDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationId">ResetDestinationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationType">ResetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetSpecialDestination">ResetSpecialDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationId` <a name="ResetDestinationId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationId"></a>

```csharp
private void ResetDestinationId()
```

##### `ResetDestinationType` <a name="ResetDestinationType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationType"></a>

```csharp
private void ResetDestinationType()
```

##### `ResetSpecialDestination` <a name="ResetSpecialDestination" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.resetSpecialDestination"></a>

```csharp
private void ResetSpecialDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationIdInput">DestinationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestinationInput">SpecialDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationId">DestinationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationType">DestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestination">SpecialDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationIdInput`<sup>Optional</sup> <a name="DestinationIdInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationIdInput"></a>

```csharp
public string DestinationIdInput { get; }
```

- *Type:* string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationTypeInput"></a>

```csharp
public string DestinationTypeInput { get; }
```

- *Type:* string

---

##### `SpecialDestinationInput`<sup>Optional</sup> <a name="SpecialDestinationInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestinationInput"></a>

```csharp
public string SpecialDestinationInput { get; }
```

- *Type:* string

---

##### `DestinationId`<sup>Required</sup> <a name="DestinationId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationId"></a>

```csharp
public string DestinationId { get; }
```

- *Type:* string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.destinationType"></a>

```csharp
public string DestinationType { get; }
```

- *Type:* string

---

##### `SpecialDestination`<sup>Required</sup> <a name="SpecialDestination" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestination"></a>

```csharp
public string SpecialDestination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RfaAccessRequestDestinationsDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsDestinations">RfaAccessRequestDestinationsDestinations</a>

---


### RfaAccessRequestDestinationsProviderConfigOutputReference <a name="RfaAccessRequestDestinationsProviderConfigOutputReference" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new RfaAccessRequestDestinationsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RfaAccessRequestDestinationsProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsProviderConfig">RfaAccessRequestDestinationsProviderConfig</a>

---


### RfaAccessRequestDestinationsSecurableOutputReference <a name="RfaAccessRequestDestinationsSecurableOutputReference" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new RfaAccessRequestDestinationsSecurableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetProviderShare">ResetProviderShare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFullName` <a name="ResetFullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetFullName"></a>

```csharp
private void ResetFullName()
```

##### `ResetProviderShare` <a name="ResetProviderShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetProviderShare"></a>

```csharp
private void ResetProviderShare()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.providerShareInput">ProviderShareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.providerShare">ProviderShare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fullNameInput"></a>

```csharp
public string FullNameInput { get; }
```

- *Type:* string

---

##### `ProviderShareInput`<sup>Optional</sup> <a name="ProviderShareInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.providerShareInput"></a>

```csharp
public string ProviderShareInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `ProviderShare`<sup>Required</sup> <a name="ProviderShare" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.providerShare"></a>

```csharp
public string ProviderShare { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RfaAccessRequestDestinationsSecurable InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.rfaAccessRequestDestinations.RfaAccessRequestDestinationsSecurable">RfaAccessRequestDestinationsSecurable</a>

---



