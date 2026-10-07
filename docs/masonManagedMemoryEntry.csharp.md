# `masonManagedMemoryEntry` Submodule <a name="`masonManagedMemoryEntry` Submodule" id="@cdktn/provider-databricks.masonManagedMemoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MasonManagedMemoryEntry <a name="MasonManagedMemoryEntry" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry databricks_mason_managed_memory_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new MasonManagedMemoryEntry(Construct Scope, string Id, MasonManagedMemoryEntryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig">MasonManagedMemoryEntryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig">MasonManagedMemoryEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetManagedMemoryEntryId">ResetManagedMemoryEntryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetSessionId">ResetSessionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetSourceType">ResetSourceType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.putProviderConfig"></a>

```csharp
private void PutProviderConfig(MasonManagedMemoryEntryProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a>

---

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetManagedMemoryEntryId` <a name="ResetManagedMemoryEntryId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetManagedMemoryEntryId"></a>

```csharp
private void ResetManagedMemoryEntryId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetSessionId` <a name="ResetSessionId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetSessionId"></a>

```csharp
private void ResetSessionId()
```

##### `ResetSourceType` <a name="ResetSourceType" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetSourceType"></a>

```csharp
private void ResetSourceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MasonManagedMemoryEntry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

MasonManagedMemoryEntry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

MasonManagedMemoryEntry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

MasonManagedMemoryEntry.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

MasonManagedMemoryEntry.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MasonManagedMemoryEntry resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MasonManagedMemoryEntry to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MasonManagedMemoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MasonManagedMemoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference">MasonManagedMemoryEntryProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.actorIdInput">ActorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.managedMemoryEntryIdInput">ManagedMemoryEntryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sessionIdInput">SessionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.actorId">ActorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.managedMemoryEntryId">ManagedMemoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sessionId">SessionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.providerConfig"></a>

```csharp
public MasonManagedMemoryEntryProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference">MasonManagedMemoryEntryProviderConfigOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ActorIdInput`<sup>Optional</sup> <a name="ActorIdInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.actorIdInput"></a>

```csharp
public string ActorIdInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ManagedMemoryEntryIdInput`<sup>Optional</sup> <a name="ManagedMemoryEntryIdInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.managedMemoryEntryIdInput"></a>

```csharp
public string ManagedMemoryEntryIdInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.providerConfigInput"></a>

```csharp
public IResolvable|MasonManagedMemoryEntryProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a>

---

##### `SessionIdInput`<sup>Optional</sup> <a name="SessionIdInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sessionIdInput"></a>

```csharp
public string SessionIdInput { get; }
```

- *Type:* string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.actorId"></a>

```csharp
public string ActorId { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ManagedMemoryEntryId`<sup>Required</sup> <a name="ManagedMemoryEntryId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.managedMemoryEntryId"></a>

```csharp
public string ManagedMemoryEntryId { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `SessionId`<sup>Required</sup> <a name="SessionId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sessionId"></a>

```csharp
public string SessionId { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MasonManagedMemoryEntryConfig <a name="MasonManagedMemoryEntryConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new MasonManagedMemoryEntryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ActorId,
    string Parent,
    string Path,
    string Content = null,
    string Description = null,
    string ManagedMemoryEntryId = null,
    MasonManagedMemoryEntryProviderConfig ProviderConfig = null,
    string SessionId = null,
    string SourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.actorId">ActorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#actor_id MasonManagedMemoryEntry#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#parent MasonManagedMemoryEntry#parent}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#path MasonManagedMemoryEntry#path}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#content MasonManagedMemoryEntry#content}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#description MasonManagedMemoryEntry#description}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.managedMemoryEntryId">ManagedMemoryEntryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#managed_memory_entry_id MasonManagedMemoryEntry#managed_memory_entry_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#provider_config MasonManagedMemoryEntry#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.sessionId">SessionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#session_id MasonManagedMemoryEntry#session_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.sourceType">SourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#source_type MasonManagedMemoryEntry#source_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.actorId"></a>

```csharp
public string ActorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#actor_id MasonManagedMemoryEntry#actor_id}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#parent MasonManagedMemoryEntry#parent}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#path MasonManagedMemoryEntry#path}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#content MasonManagedMemoryEntry#content}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#description MasonManagedMemoryEntry#description}.

---

##### `ManagedMemoryEntryId`<sup>Optional</sup> <a name="ManagedMemoryEntryId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.managedMemoryEntryId"></a>

```csharp
public string ManagedMemoryEntryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#managed_memory_entry_id MasonManagedMemoryEntry#managed_memory_entry_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.providerConfig"></a>

```csharp
public MasonManagedMemoryEntryProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#provider_config MasonManagedMemoryEntry#provider_config}.

---

##### `SessionId`<sup>Optional</sup> <a name="SessionId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.sessionId"></a>

```csharp
public string SessionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#session_id MasonManagedMemoryEntry#session_id}.

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#source_type MasonManagedMemoryEntry#source_type}.

---

### MasonManagedMemoryEntryProviderConfig <a name="MasonManagedMemoryEntryProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new MasonManagedMemoryEntryProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#workspace_id MasonManagedMemoryEntry#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#workspace_id MasonManagedMemoryEntry#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MasonManagedMemoryEntryProviderConfigOutputReference <a name="MasonManagedMemoryEntryProviderConfigOutputReference" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new MasonManagedMemoryEntryProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MasonManagedMemoryEntryProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a>

---



