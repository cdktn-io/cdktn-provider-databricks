# `environmentsDefaultWorkspaceBaseEnvironment` Submodule <a name="`environmentsDefaultWorkspaceBaseEnvironment` Submodule" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnvironmentsDefaultWorkspaceBaseEnvironment <a name="EnvironmentsDefaultWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment databricks_environments_default_workspace_base_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new EnvironmentsDefaultWorkspaceBaseEnvironment(Construct Scope, string Id, EnvironmentsDefaultWorkspaceBaseEnvironmentConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetCpuWorkspaceBaseEnvironment">ResetCpuWorkspaceBaseEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetGpuWorkspaceBaseEnvironment">ResetGpuWorkspaceBaseEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.putProviderConfig"></a>

```csharp
private void PutProviderConfig(EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `ResetCpuWorkspaceBaseEnvironment` <a name="ResetCpuWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetCpuWorkspaceBaseEnvironment"></a>

```csharp
private void ResetCpuWorkspaceBaseEnvironment()
```

##### `ResetGpuWorkspaceBaseEnvironment` <a name="ResetGpuWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetGpuWorkspaceBaseEnvironment"></a>

```csharp
private void ResetGpuWorkspaceBaseEnvironment()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EnvironmentsDefaultWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

EnvironmentsDefaultWorkspaceBaseEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

EnvironmentsDefaultWorkspaceBaseEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

EnvironmentsDefaultWorkspaceBaseEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

EnvironmentsDefaultWorkspaceBaseEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EnvironmentsDefaultWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EnvironmentsDefaultWorkspaceBaseEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EnvironmentsDefaultWorkspaceBaseEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EnvironmentsDefaultWorkspaceBaseEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cpuWorkspaceBaseEnvironmentInput">CpuWorkspaceBaseEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.gpuWorkspaceBaseEnvironmentInput">GpuWorkspaceBaseEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cpuWorkspaceBaseEnvironment">CpuWorkspaceBaseEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.gpuWorkspaceBaseEnvironment">GpuWorkspaceBaseEnvironment</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfig"></a>

```csharp
public EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference</a>

---

##### `CpuWorkspaceBaseEnvironmentInput`<sup>Optional</sup> <a name="CpuWorkspaceBaseEnvironmentInput" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cpuWorkspaceBaseEnvironmentInput"></a>

```csharp
public string CpuWorkspaceBaseEnvironmentInput { get; }
```

- *Type:* string

---

##### `GpuWorkspaceBaseEnvironmentInput`<sup>Optional</sup> <a name="GpuWorkspaceBaseEnvironmentInput" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.gpuWorkspaceBaseEnvironmentInput"></a>

```csharp
public string GpuWorkspaceBaseEnvironmentInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfigInput"></a>

```csharp
public IResolvable|EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `CpuWorkspaceBaseEnvironment`<sup>Required</sup> <a name="CpuWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cpuWorkspaceBaseEnvironment"></a>

```csharp
public string CpuWorkspaceBaseEnvironment { get; }
```

- *Type:* string

---

##### `GpuWorkspaceBaseEnvironment`<sup>Required</sup> <a name="GpuWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.gpuWorkspaceBaseEnvironment"></a>

```csharp
public string GpuWorkspaceBaseEnvironment { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnvironmentsDefaultWorkspaceBaseEnvironmentConfig <a name="EnvironmentsDefaultWorkspaceBaseEnvironmentConfig" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new EnvironmentsDefaultWorkspaceBaseEnvironmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CpuWorkspaceBaseEnvironment = null,
    string GpuWorkspaceBaseEnvironment = null,
    EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.cpuWorkspaceBaseEnvironment">CpuWorkspaceBaseEnvironment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment#cpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#cpu_workspace_base_environment}. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.gpuWorkspaceBaseEnvironment">GpuWorkspaceBaseEnvironment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment#gpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#gpu_workspace_base_environment}. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment#provider_config EnvironmentsDefaultWorkspaceBaseEnvironment#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CpuWorkspaceBaseEnvironment`<sup>Optional</sup> <a name="CpuWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.cpuWorkspaceBaseEnvironment"></a>

```csharp
public string CpuWorkspaceBaseEnvironment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment#cpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#cpu_workspace_base_environment}.

---

##### `GpuWorkspaceBaseEnvironment`<sup>Optional</sup> <a name="GpuWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.gpuWorkspaceBaseEnvironment"></a>

```csharp
public string GpuWorkspaceBaseEnvironment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment#gpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#gpu_workspace_base_environment}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.providerConfig"></a>

```csharp
public EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment#provider_config EnvironmentsDefaultWorkspaceBaseEnvironment#provider_config}.

---

### EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig <a name="EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment#workspace_id EnvironmentsDefaultWorkspaceBaseEnvironment#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/environments_default_workspace_base_environment#workspace_id EnvironmentsDefaultWorkspaceBaseEnvironment#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference <a name="EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

---



