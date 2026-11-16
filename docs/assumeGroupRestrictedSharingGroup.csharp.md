# `assumeGroupRestrictedSharingGroup` Submodule <a name="`assumeGroupRestrictedSharingGroup` Submodule" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AssumeGroupRestrictedSharingGroup <a name="AssumeGroupRestrictedSharingGroup" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/assume_group_restricted_sharing_group databricks_assume_group_restricted_sharing_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AssumeGroupRestrictedSharingGroup(Construct Scope, string Id, AssumeGroupRestrictedSharingGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig">AssumeGroupRestrictedSharingGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig">AssumeGroupRestrictedSharingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.putProviderConfig"></a>

```csharp
private void PutProviderConfig(AssumeGroupRestrictedSharingGroupProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AssumeGroupRestrictedSharingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AssumeGroupRestrictedSharingGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AssumeGroupRestrictedSharingGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AssumeGroupRestrictedSharingGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AssumeGroupRestrictedSharingGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AssumeGroupRestrictedSharingGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AssumeGroupRestrictedSharingGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AssumeGroupRestrictedSharingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/assume_group_restricted_sharing_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AssumeGroupRestrictedSharingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.groupDisplayName">GroupDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference">AssumeGroupRestrictedSharingGroupProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupIdInput">RestrictedSharingGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupId">RestrictedSharingGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GroupDisplayName`<sup>Required</sup> <a name="GroupDisplayName" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.groupDisplayName"></a>

```csharp
public string GroupDisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.providerConfig"></a>

```csharp
public AssumeGroupRestrictedSharingGroupProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference">AssumeGroupRestrictedSharingGroupProviderConfigOutputReference</a>

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.providerConfigInput"></a>

```csharp
public IResolvable|AssumeGroupRestrictedSharingGroupProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a>

---

##### `RestrictedSharingGroupIdInput`<sup>Optional</sup> <a name="RestrictedSharingGroupIdInput" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupIdInput"></a>

```csharp
public string RestrictedSharingGroupIdInput { get; }
```

- *Type:* string

---

##### `RestrictedSharingGroupId`<sup>Required</sup> <a name="RestrictedSharingGroupId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupId"></a>

```csharp
public string RestrictedSharingGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AssumeGroupRestrictedSharingGroupConfig <a name="AssumeGroupRestrictedSharingGroupConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AssumeGroupRestrictedSharingGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RestrictedSharingGroupId,
    AssumeGroupRestrictedSharingGroupProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.restrictedSharingGroupId">RestrictedSharingGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/assume_group_restricted_sharing_group#restricted_sharing_group_id AssumeGroupRestrictedSharingGroup#restricted_sharing_group_id}. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/assume_group_restricted_sharing_group#provider_config AssumeGroupRestrictedSharingGroup#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RestrictedSharingGroupId`<sup>Required</sup> <a name="RestrictedSharingGroupId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.restrictedSharingGroupId"></a>

```csharp
public string RestrictedSharingGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/assume_group_restricted_sharing_group#restricted_sharing_group_id AssumeGroupRestrictedSharingGroup#restricted_sharing_group_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.providerConfig"></a>

```csharp
public AssumeGroupRestrictedSharingGroupProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/assume_group_restricted_sharing_group#provider_config AssumeGroupRestrictedSharingGroup#provider_config}.

---

### AssumeGroupRestrictedSharingGroupProviderConfig <a name="AssumeGroupRestrictedSharingGroupProviderConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AssumeGroupRestrictedSharingGroupProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/assume_group_restricted_sharing_group#workspace_id AssumeGroupRestrictedSharingGroup#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/assume_group_restricted_sharing_group#workspace_id AssumeGroupRestrictedSharingGroup#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AssumeGroupRestrictedSharingGroupProviderConfigOutputReference <a name="AssumeGroupRestrictedSharingGroupProviderConfigOutputReference" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AssumeGroupRestrictedSharingGroupProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AssumeGroupRestrictedSharingGroupProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a>

---



