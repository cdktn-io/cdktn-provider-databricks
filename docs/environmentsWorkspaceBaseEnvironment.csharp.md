# `environmentsWorkspaceBaseEnvironment` Submodule <a name="`environmentsWorkspaceBaseEnvironment` Submodule" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnvironmentsWorkspaceBaseEnvironment <a name="EnvironmentsWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment databricks_environments_workspace_base_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new EnvironmentsWorkspaceBaseEnvironment(Construct Scope, string Id, EnvironmentsWorkspaceBaseEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig">EnvironmentsWorkspaceBaseEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig">EnvironmentsWorkspaceBaseEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetBaseEnvironmentType">ResetBaseEnvironmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetFilepath">ResetFilepath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetWorkspaceBaseEnvironmentId">ResetWorkspaceBaseEnvironmentId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.putProviderConfig"></a>

```csharp
private void PutProviderConfig(EnvironmentsWorkspaceBaseEnvironmentProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `ResetBaseEnvironmentType` <a name="ResetBaseEnvironmentType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetBaseEnvironmentType"></a>

```csharp
private void ResetBaseEnvironmentType()
```

##### `ResetFilepath` <a name="ResetFilepath" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetFilepath"></a>

```csharp
private void ResetFilepath()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetWorkspaceBaseEnvironmentId` <a name="ResetWorkspaceBaseEnvironmentId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetWorkspaceBaseEnvironmentId"></a>

```csharp
private void ResetWorkspaceBaseEnvironmentId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EnvironmentsWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

EnvironmentsWorkspaceBaseEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

EnvironmentsWorkspaceBaseEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

EnvironmentsWorkspaceBaseEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

EnvironmentsWorkspaceBaseEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EnvironmentsWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EnvironmentsWorkspaceBaseEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EnvironmentsWorkspaceBaseEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EnvironmentsWorkspaceBaseEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.creatorUserId">CreatorUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.effectiveBaseEnvironmentType">EffectiveBaseEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.isDefault">IsDefault</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lastUpdatedUserId">LastUpdatedUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference">EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference">EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentTypeInput">BaseEnvironmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepathInput">FilepathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentIdInput">WorkspaceBaseEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentType">BaseEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepath">Filepath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentId">WorkspaceBaseEnvironmentId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CreatorUserId`<sup>Required</sup> <a name="CreatorUserId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.creatorUserId"></a>

```csharp
public string CreatorUserId { get; }
```

- *Type:* string

---

##### `EffectiveBaseEnvironmentType`<sup>Required</sup> <a name="EffectiveBaseEnvironmentType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.effectiveBaseEnvironmentType"></a>

```csharp
public string EffectiveBaseEnvironmentType { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LastUpdatedUserId`<sup>Required</sup> <a name="LastUpdatedUserId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lastUpdatedUserId"></a>

```csharp
public string LastUpdatedUserId { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfig"></a>

```csharp
public EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference">EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.spec"></a>

```csharp
public EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference">EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BaseEnvironmentTypeInput`<sup>Optional</sup> <a name="BaseEnvironmentTypeInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentTypeInput"></a>

```csharp
public string BaseEnvironmentTypeInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilepathInput`<sup>Optional</sup> <a name="FilepathInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepathInput"></a>

```csharp
public string FilepathInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfigInput"></a>

```csharp
public IResolvable|EnvironmentsWorkspaceBaseEnvironmentProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `WorkspaceBaseEnvironmentIdInput`<sup>Optional</sup> <a name="WorkspaceBaseEnvironmentIdInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentIdInput"></a>

```csharp
public string WorkspaceBaseEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `BaseEnvironmentType`<sup>Required</sup> <a name="BaseEnvironmentType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentType"></a>

```csharp
public string BaseEnvironmentType { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Filepath`<sup>Required</sup> <a name="Filepath" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepath"></a>

```csharp
public string Filepath { get; }
```

- *Type:* string

---

##### `WorkspaceBaseEnvironmentId`<sup>Required</sup> <a name="WorkspaceBaseEnvironmentId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentId"></a>

```csharp
public string WorkspaceBaseEnvironmentId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnvironmentsWorkspaceBaseEnvironmentConfig <a name="EnvironmentsWorkspaceBaseEnvironmentConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new EnvironmentsWorkspaceBaseEnvironmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string BaseEnvironmentType = null,
    string Filepath = null,
    EnvironmentsWorkspaceBaseEnvironmentProviderConfig ProviderConfig = null,
    string WorkspaceBaseEnvironmentId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment#display_name EnvironmentsWorkspaceBaseEnvironment#display_name}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.baseEnvironmentType">BaseEnvironmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment#base_environment_type EnvironmentsWorkspaceBaseEnvironment#base_environment_type}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.filepath">Filepath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment#filepath EnvironmentsWorkspaceBaseEnvironment#filepath}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment#provider_config EnvironmentsWorkspaceBaseEnvironment#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.workspaceBaseEnvironmentId">WorkspaceBaseEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment#workspace_base_environment_id EnvironmentsWorkspaceBaseEnvironment#workspace_base_environment_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment#display_name EnvironmentsWorkspaceBaseEnvironment#display_name}.

---

##### `BaseEnvironmentType`<sup>Optional</sup> <a name="BaseEnvironmentType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.baseEnvironmentType"></a>

```csharp
public string BaseEnvironmentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment#base_environment_type EnvironmentsWorkspaceBaseEnvironment#base_environment_type}.

---

##### `Filepath`<sup>Optional</sup> <a name="Filepath" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.filepath"></a>

```csharp
public string Filepath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment#filepath EnvironmentsWorkspaceBaseEnvironment#filepath}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.providerConfig"></a>

```csharp
public EnvironmentsWorkspaceBaseEnvironmentProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment#provider_config EnvironmentsWorkspaceBaseEnvironment#provider_config}.

---

##### `WorkspaceBaseEnvironmentId`<sup>Optional</sup> <a name="WorkspaceBaseEnvironmentId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.workspaceBaseEnvironmentId"></a>

```csharp
public string WorkspaceBaseEnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment#workspace_base_environment_id EnvironmentsWorkspaceBaseEnvironment#workspace_base_environment_id}.

---

### EnvironmentsWorkspaceBaseEnvironmentProviderConfig <a name="EnvironmentsWorkspaceBaseEnvironmentProviderConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new EnvironmentsWorkspaceBaseEnvironmentProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment#workspace_id EnvironmentsWorkspaceBaseEnvironment#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment#workspace_id EnvironmentsWorkspaceBaseEnvironment#workspace_id}.

---

### EnvironmentsWorkspaceBaseEnvironmentSpec <a name="EnvironmentsWorkspaceBaseEnvironmentSpec" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new EnvironmentsWorkspaceBaseEnvironmentSpec {
    string[] Dependencies = null,
    string EnvironmentVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpec.property.dependencies">Dependencies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment#dependencies EnvironmentsWorkspaceBaseEnvironment#dependencies}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpec.property.environmentVersion">EnvironmentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment#environment_version EnvironmentsWorkspaceBaseEnvironment#environment_version}. |

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpec.property.dependencies"></a>

```csharp
public string[] Dependencies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment#dependencies EnvironmentsWorkspaceBaseEnvironment#dependencies}.

---

##### `EnvironmentVersion`<sup>Optional</sup> <a name="EnvironmentVersion" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpec.property.environmentVersion"></a>

```csharp
public string EnvironmentVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/environments_workspace_base_environment#environment_version EnvironmentsWorkspaceBaseEnvironment#environment_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference <a name="EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EnvironmentsWorkspaceBaseEnvironmentProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

---


### EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference <a name="EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resetDependencies">ResetDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resetEnvironmentVersion">ResetEnvironmentVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDependencies` <a name="ResetDependencies" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resetDependencies"></a>

```csharp
private void ResetDependencies()
```

##### `ResetEnvironmentVersion` <a name="ResetEnvironmentVersion" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resetEnvironmentVersion"></a>

```csharp
private void ResetEnvironmentVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.dependenciesInput">DependenciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.environmentVersionInput">EnvironmentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.dependencies">Dependencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.environmentVersion">EnvironmentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpec">EnvironmentsWorkspaceBaseEnvironmentSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.dependenciesInput"></a>

```csharp
public string[] DependenciesInput { get; }
```

- *Type:* string[]

---

##### `EnvironmentVersionInput`<sup>Optional</sup> <a name="EnvironmentVersionInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.environmentVersionInput"></a>

```csharp
public string EnvironmentVersionInput { get; }
```

- *Type:* string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.dependencies"></a>

```csharp
public string[] Dependencies { get; }
```

- *Type:* string[]

---

##### `EnvironmentVersion`<sup>Required</sup> <a name="EnvironmentVersion" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.environmentVersion"></a>

```csharp
public string EnvironmentVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.internalValue"></a>

```csharp
public EnvironmentsWorkspaceBaseEnvironmentSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpec">EnvironmentsWorkspaceBaseEnvironmentSpec</a>

---



